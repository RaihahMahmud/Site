export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-paper/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[11px] text-dim">
          © {year} Raihan Mahmud · Designed & built by hand
        </p>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-acid animate-pulse" aria-hidden="true" />
          <span className="font-mono text-[11px] text-dim">Available for work</span>
        </div>
        <p className="font-mono text-[11px] text-dim">Dhaka, Bangladesh</p>

        {/*
          TODO(FlyRank Graduate Badge): Official badge asset and verification URL
          are not in this repository. Do not invent either. When FlyRank provides
          both, insert them in the slot below:

          <a
            href="OFFICIAL_VERIFICATION_URL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Verify FlyRank Graduate Badge"
          >
            <img src="OFFICIAL_BADGE_ASSET" alt="FlyRank Graduate Badge" className="h-8 w-auto" />
          </a>
        */}
        <div data-todo="flyrank-graduate-badge" className="contents" />
      </div>
    </footer>
  );
}
