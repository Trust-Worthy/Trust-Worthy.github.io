// Projects Page - GitHub Integration
// Fetches repositories from GitHub API and displays them

document.addEventListener("DOMContentLoaded", async () => {
    const username = "Trust-Worthy"; // Your GitHub username
    const projectsContainer = document.getElementById("github-projects");
    const loadingState = document.getElementById("github-loading");
    const errorState = document.getElementById("github-error");

    // GitHub API endpoint
    const apiUrl = `https://api.github.com/users/${username}/repos?sort=updated&per_page=12`;

    try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`GitHub API returned ${response.status}`);
        }

        const repos = await response.json();
        
        // Hide loading state
        loadingState.style.display = "none";

        // Filter and sort repos
        const filteredRepos = repos
            .filter(repo => !repo.fork && !repo.archived) // Exclude forks and archived
            .sort((a, b) => b.stargazers_count - a.stargazers_count) // Sort by stars
            .slice(0, 6); // Show top 6

        // Render each repo
        filteredRepos.forEach(repo => {
            const card = createRepoCard(repo);
            projectsContainer.appendChild(card);
        });

        // If no repos found
        if (filteredRepos.length === 0) {
            projectsContainer.innerHTML = '<p class="section-description">No public repositories found.</p>';
        }

    } catch (error) {
        console.error("Error fetching GitHub repos:", error);
        loadingState.style.display = "none";
        errorState.style.display = "block";
    }
});

/**
 * Creates a project card element from GitHub repo data
 */
function createRepoCard(repo) {
    const article = document.createElement("article");
    article.className = "project-card github-card";

    // Card Header
    const header = document.createElement("div");
    header.className = "card-header";

    const title = document.createElement("h3");
    title.textContent = repo.name.replace(/-/g, " "); // Format name
    header.appendChild(title);

    const tags = document.createElement("div");
    tags.className = "card-tags";
    
    // Language tag
    if (repo.language) {
        const langTag = document.createElement("span");
        langTag.className = "tag tech";
        langTag.textContent = repo.language;
        tags.appendChild(langTag);
    }

    // Updated date
    const dateTag = document.createElement("span");
    dateTag.className = "tag";
    dateTag.textContent = formatDate(repo.updated_at);
    tags.appendChild(dateTag);

    header.appendChild(tags);
    article.appendChild(header);

    // Description
    const description = document.createElement("p");
    description.className = "card-description";
    description.textContent = repo.description || "No description provided.";
    article.appendChild(description);

    // Stats
    if (repo.stargazers_count > 0 || repo.forks_count > 0) {
        const stats = document.createElement("div");
        stats.className = "card-stats";
        
        if (repo.stargazers_count > 0) {
            const stars = document.createElement("span");
            stars.textContent = `⭐ ${formatNumber(repo.stargazers_count)}`;
            stats.appendChild(stars);
        }
        
        if (repo.forks_count > 0) {
            const forks = document.createElement("span");
            forks.textContent = `🔀 ${formatNumber(repo.forks_count)}`;
            stats.appendChild(forks);
        }

        article.appendChild(stats);
    }

    // Links
    const links = document.createElement("div");
    links.className = "card-links";

    const repoLink = document.createElement("a");
    repoLink.href = repo.html_url;
    repoLink.target = "_blank";
    repoLink.rel = "noopener noreferrer";
    repoLink.className = "link-button primary";
    repoLink.textContent = "View on GitHub →";
    links.appendChild(repoLink);

    // Homepage link if available
    if (repo.homepage) {
        const homepageLink = document.createElement("a");
        homepageLink.href = repo.homepage;
        homepageLink.target = "_blank";
        homepageLink.rel = "noopener noreferrer";
        homepageLink.className = "link-button secondary";
        homepageLink.textContent = "Live Demo";
        links.appendChild(homepageLink);
    }

    article.appendChild(links);

    return article;
}

/**
 * Formats a date string to relative time (e.g., "2 months ago")
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
}

/**
 * Formats numbers with K suffix (e.g., 1200 → 1.2k)
 */
function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + "k";
    }
    return num.toString();
}

/**
 * Optional: Fetch README content from a specific repo
 * Uncomment and customize if you want to display README content
 */
async function fetchReadme(username, repoName) {
    try {
        const response = await fetch(
            `https://api.github.com/repos/${username}/${repoName}/readme`,
            {
                headers: {
                    'Accept': 'application/vnd.github.v3.raw'
                }
            }
        );
        
        if (response.ok) {
            const readme = await response.text();
            return readme;
        }
    } catch (error) {
        console.error(`Error fetching README for ${repoName}:`, error);
    }
    return null;
}