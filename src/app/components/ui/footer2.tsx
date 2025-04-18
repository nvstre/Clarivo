interface MenuItem {
    title: string;
    links: {
      text: string;
      url: string;
    }[];
  }
  
  interface Footer2Props {
    logo?: {
      url: string;
      src: string;
      alt: string;
      title: string;
    };
    tagline?: string;
    menuItems?: MenuItem[];
    copyright?: string;
    bottomLinks?: {
      text: string;
      url: string;
    }[];
  }
  
  const Footer2 = ({
    logo = {
      src: "https://i1.sndcdn.com/artworks-aSDeygKC5l1z3rpR-xo8WDw-t500x500.jpg",
      alt: "Clarivo",
      title: "Clarivo",
      url: "https://i1.sndcdn.com/artworks-aSDeygKC5l1z3rpR-xo8WDw-t500x500.jpg ",
    },
    tagline = "We the best",
    menuItems = [
      {
        title: "Product",
        links: [
          { text: "Features ", url: "#features" },
          { text: "Pricing", url: "#price" },
          { text: "Reviews", url: "#reviews" },
          { text: "FAQ", url: "#faq" },
        ],
      },
      {
        title: "Company",
        links: [
          { text: "About Us", url: "#" },
          { text: "Fundraising", url: "#" },
          { text: "Investors", url: "#" },
          { text: "Contact Us", url: "#" },
        ],
      },
      {
        title: "Social",
        links: [
          { text: "TikTok", url: "#" },
          { text: "Instagram", url: "#" },
          { text: "LinkedIn", url: "#" },
        ],
      },
    ],
    copyright = "© 2025 Copyright. All rights reserved.",
    bottomLinks = [
      { text: "Terms and Conditions", url: "#" },
      { text: "Privacy Policy", url: "#" },
    ],
  }: Footer2Props) => {
    return (
      <section className="py-32">
        <div className="container mx-auto">
          <footer>
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 text-center lg:text-left">
              <div className="col-span-1 lg:col-span-2 mb-8 lg:mb-0">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <a href={logo.url}>
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      title={logo.title}
                      className="h-10"
                    />
                  </a>
                  <p className="text-xl font-semibold">{logo.title}</p>
                </div>
                <p className="mt-4 font-bold">{tagline}</p>
              </div>
              {menuItems.map((section, sectionIdx) => (
                <div key={sectionIdx} className="text-center lg:text-left">
                  <h3 className="mb-4 font-bold">{section.title}</h3>
                  <ul className="space-y-4 text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx} className="font-medium hover:text-primary">
                        <a href={link.url}>{link.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
              <p className="text-center md:text-left">{copyright}</p>
              <ul className="flex gap-4 justify-center md:justify-start">
                {bottomLinks.map((link, linkIdx) => (
                  <li key={linkIdx} className="underline hover:text-primary">
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </footer>
        </div>
      </section>
    );
  };
  
  export { Footer2 };
  