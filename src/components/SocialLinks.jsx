function SocialLinks() {
  const links = [
    { name: "GitHub", url: "https://github.com/Soumyadeepaul" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/paulsoumyadeep-cse/" },
    { name: "LeetCode", url: "https://leetcode.com/u/paulsoumyadeep7/" },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "1.5rem",
        fontSize: "0.95rem",
      }}
    >
      {links.map((link, i) => (
        <a
          key={i}
          href={link.url}
          target="_blank"
          style={{
            textDecoration: "none",
            color: "var(--text)",
            opacity: 0.6,
            position: "relative",
            transition: "0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.opacity = 1)}
          onMouseLeave={(e) => (e.target.style.opacity = 0.6)}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;