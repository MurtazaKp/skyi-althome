// Blog images
const sindhudurgImage1 =
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80";
const sindhudurgImage2 =
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80";
const hiveImage = "/imports/HIVE_04.png";
const zomeImage1 =
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80";
const zomeImage2 =
  "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1200&q=80";
const lodgeImage =
  "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80";

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  content: Array<{
    type: "paragraph" | "heading";
    text: string;
  }>;
}

export const blogPosts: Record<string, BlogPost> = {
  roi: {
    slug: "roi",
    title: "ROI",
    subtitle: "Calculate Your Return",
    description: "Understanding the financial benefits of modular architecture",
    image: sindhudurgImage1,
    category: "Business",
    readTime: "5 min read",
    date: "March 15, 2026",
    content: [
      {
        type: "paragraph",
        text: "Investing in modular architecture represents a fundamental shift in how we approach construction economics. Traditional building methods often carry hidden costs that only emerge during and after construction, making accurate ROI projections challenging.",
      },
      {
        type: "heading",
        text: "Speed to Market",
      },
      {
        type: "paragraph",
        text: "One of the most significant advantages of modular construction is the dramatic reduction in build time. While traditional construction timelines can stretch 12-18 months, modular structures can be operational in 8-12 weeks. This time savings translates directly to revenue generation, allowing businesses to start earning returns months or even years earlier.",
      },
      {
        type: "heading",
        text: "Predictable Costs",
      },
      {
        type: "paragraph",
        text: "Factory-based construction provides unprecedented cost certainty. Weather delays, material waste, and labor inefficiencies are minimized or eliminated entirely. This predictability allows for more accurate financial planning and reduces the risk of budget overruns that plague traditional construction projects.",
      },
      {
        type: "heading",
        text: "Lower Operating Costs",
      },
      {
        type: "paragraph",
        text: "Modern modular structures incorporate advanced building science, resulting in superior energy efficiency. Reduced heating and cooling costs, combined with minimal maintenance requirements, create ongoing operational savings that compound over the lifetime of the structure.",
      },
      {
        type: "heading",
        text: "Asset Flexibility",
      },
      {
        type: "paragraph",
        text: "Unlike permanent structures, modular buildings can be relocated, expanded, or reconfigured as business needs evolve. This flexibility preserves capital value and provides options that fixed structures cannot match, making them particularly attractive for growing businesses or seasonal operations.",
      },
    ],
  },
  materials: {
    slug: "materials",
    title: "Materials",
    subtitle: "Premium Quality",
    description: "The science behind sustainable, high-performance materials",
    image: hiveImage,
    category: "Design",
    readTime: "4 min read",
    date: "March 10, 2026",
    content: [
      {
        type: "paragraph",
        text: "The materials we choose define not just the aesthetics of a structure, but its longevity, sustainability, and performance in diverse environments. AltHome structures are built using carefully selected materials that balance durability with environmental responsibility.",
      },
      {
        type: "heading",
        text: "Digital Precision Hubs",
      },
      {
        type: "paragraph",
        text: "At the heart of our structural system are millimetre-precise digital hubs, manufactured using advanced CNC technology. These hubs eliminate the need for welding, creating stronger connections while removing potential points of corrosion and failure. Zinc plating provides additional protection in harsh environments.",
      },
      {
        type: "heading",
        text: "Rice Husk Composite Core",
      },
      {
        type: "paragraph",
        text: "Our wall and ceiling panels utilize an innovative rice husk composite core that transforms agricultural waste into a high-performance building material. This bio-based composite is naturally termite-resistant, achieves high fire ratings, and provides excellent thermal and acoustic insulation while maintaining complete waterproof integrity.",
      },
      {
        type: "heading",
        text: "Weathering and Longevity",
      },
      {
        type: "paragraph",
        text: "Every material is selected for its ability to perform in real-world conditions over decades, not just years. Corrosion-resistant hardware, UV-stable finishes, and moisture-resistant assemblies ensure that structures maintain their integrity and appearance with minimal maintenance.",
      },
      {
        type: "heading",
        text: "Environmental Impact",
      },
      {
        type: "paragraph",
        text: "Material selection extends beyond performance to consider lifecycle environmental impact. By utilizing agricultural waste products, minimizing material waste through precision manufacturing, and choosing materials with low embodied carbon, we reduce the environmental footprint without compromising structural quality.",
      },
    ],
  },
  comparison: {
    slug: "comparison",
    title: "Comparison",
    subtitle: "HIVE vs ZOME",
    description: "Choosing the right modular solution for your project",
    image: zomeImage1,
    category: "Product",
    readTime: "6 min read",
    date: "March 5, 2026",
    content: [
      {
        type: "paragraph",
        text: "Both HIVE and ZOME represent the pinnacle of modular architecture, but they serve different purposes and contexts. Understanding these differences helps identify which solution best aligns with your project goals.",
      },
      {
        type: "heading",
        text: "HIVE: Versatile Social Spaces",
      },
      {
        type: "paragraph",
        text: "HIVE structures are designed around the concept of gathering. Their hexagonal geometry creates naturally flowing spaces that adapt to multiple uses - cafes, wellness centers, co-working spaces, or event venues. The open plan layout maximizes usable space while maintaining visual interest through geometry.",
      },
      {
        type: "paragraph",
        text: "The modular nature of HIVE allows for expansion through the addition of connected units, creating larger complexes while maintaining architectural coherence. This scalability makes HIVE ideal for businesses planning phased growth or testing concepts before committing to larger investments.",
      },
      {
        type: "heading",
        text: "ZOME: Immersive Private Retreats",
      },
      {
        type: "paragraph",
        text: "ZOME takes a different approach, using geodesic dome geometry to create intimate, self-contained environments. The dome form provides exceptional structural efficiency, allowing for panoramic windows and skylights that dissolve the boundary between interior and exterior.",
      },
      {
        type: "paragraph",
        text: "These structures excel in remote or challenging locations where their minimal foundation requirements and structural resilience provide advantages over conventional construction. The spherical geometry also creates unique interior volumes that feel larger than their square footage suggests.",
      },
      {
        type: "heading",
        text: "Making the Choice",
      },
      {
        type: "paragraph",
        text: "The decision between HIVE and ZOME often comes down to program and context. HIVE works best for commercial and social programs requiring flexibility and the potential for expansion. ZOME excels for hospitality, wellness retreats, or private residences where the goal is creating distinctive, immersive experiences in natural settings.",
      },
    ],
  },
  cafes: {
    slug: "cafes",
    title: "Cafes",
    subtitle: "Commercial Spaces",
    description: "Creating unique cafe experiences through modular design",
    image: sindhudurgImage2,
    category: "Case Study",
    readTime: "7 min read",
    date: "February 28, 2026",
    content: [
      {
        type: "paragraph",
        text: "The modern cafe is more than a place to grab coffee - it is a destination, a workspace, and a community hub. Forward-thinking cafe operators are discovering that modular architecture offers unique advantages in creating memorable customer experiences while maintaining operational efficiency.",
      },
      {
        type: "heading",
        text: "Distinctive Character",
      },
      {
        type: "paragraph",
        text: "In an industry where ambiance drives customer loyalty, HIVE structures provide instant architectural distinction. The hexagonal geometry creates visual interest both inside and out, while the modular nature allows for customization through material choices, window configurations, and spatial arrangements.",
      },
      {
        type: "heading",
        text: "Operational Advantages",
      },
      {
        type: "paragraph",
        text: "The speed of modular construction transforms cafe development timelines. Operators can move from concept to opening in weeks rather than months, reducing carrying costs and allowing quicker responses to market opportunities. This agility is particularly valuable for seasonal locations or pop-up concepts testing new markets.",
      },
      {
        type: "heading",
        text: "Sustainability as Brand",
      },
      {
        type: "paragraph",
        text: "Consumers increasingly value sustainability, and the environmental story of modular construction resonates with cafe customers. From the use of recycled materials to the minimal site impact and potential for relocation, modular cafes align with the values of environmentally conscious consumers.",
      },
      {
        type: "heading",
        text: "Expansion and Evolution",
      },
      {
        type: "paragraph",
        text: "Successful cafes often need to expand seating or add functions like retail or co-working space. The modular approach makes this evolution straightforward, allowing businesses to grow their physical footprint in response to demand without the disruption of traditional construction.",
      },
    ],
  },
  resort: {
    slug: "resort",
    title: "Resort",
    subtitle: "Hospitality Excellence",
    description: "Redefining luxury hospitality through sustainable architecture",
    image: lodgeImage,
    category: "Case Study",
    readTime: "8 min read",
    date: "February 20, 2026",
    content: [
      {
        type: "paragraph",
        text: "The hospitality industry faces a unique challenge: delivering exceptional guest experiences while minimizing environmental impact and managing development costs. Modular architecture is emerging as a solution that addresses all three imperatives simultaneously.",
      },
      {
        type: "heading",
        text: "Guest Experience",
      },
      {
        type: "paragraph",
        text: "Modern travelers seek authentic experiences that connect them with natural environments. ZOME structures, with their panoramic views and organic forms, create the sense of immersion that guests desire. The unique geometry becomes part of the experience itself, providing visual interest that conventional rooms cannot match.",
      },
      {
        type: "paragraph",
        text: "Privacy and quiet are preserved through advanced acoustic design and thoughtful site planning. Each unit can be positioned to maximize views while ensuring guest seclusion, creating the sense of having the landscape to yourself.",
      },
      {
        type: "heading",
        text: "Development Economics",
      },
      {
        type: "paragraph",
        text: "Resort development traditionally requires massive capital investments with long payback periods. Modular construction reduces both initial costs and time to market. Resorts can open with a smaller number of units and expand based on actual demand rather than projected occupancy, reducing financial risk.",
      },
      {
        type: "paragraph",
        text: "The ability to relocate or reconfigure units provides flexibility that permanent structures cannot offer. Seasonal resorts can adjust capacity, while established properties can refresh their offerings by repositioning or replacing units.",
      },
      {
        type: "heading",
        text: "Environmental Stewardship",
      },
      {
        type: "paragraph",
        text: "Resorts increasingly operate in sensitive environments where traditional construction would be inappropriate or impossible. The minimal foundation requirements and reduced site disturbance of modular structures allow development in locations that must be protected, creating unique positioning while demonstrating environmental responsibility.",
      },
      {
        type: "paragraph",
        text: "Energy efficiency and water conservation features built into the structures reduce ongoing operating costs while supporting sustainability goals that matter to both operators and guests.",
      },
    ],
  },
  "eco-tourism": {
    slug: "eco-tourism",
    title: "Eco Tourism",
    subtitle: "Sustainable Travel",
    description: "Enabling responsible tourism through minimal-impact architecture",
    image: zomeImage2,
    category: "Case Study",
    readTime: "6 min read",
    date: "February 15, 2026",
    content: [
      {
        type: "paragraph",
        text: "Eco-tourism faces an inherent paradox: providing access to pristine natural environments while preserving those very qualities that make them special. Modular architecture offers a resolution to this tension through structures that minimize impact while maximizing the connection between guests and nature.",
      },
      {
        type: "heading",
        text: "Minimal Site Impact",
      },
      {
        type: "paragraph",
        text: "Traditional construction in remote locations typically requires extensive site work - access roads for heavy equipment, clearing for staging areas, and disruptive foundation work. Modular structures arrive largely complete, requiring only minimal site preparation and creating significantly less disturbance.",
      },
      {
        type: "paragraph",
        text: "The elevated foundation systems preserve natural drainage patterns and allow vegetation to grow beneath structures, maintaining site ecology. When structures are eventually removed, the land can return to its natural state with minimal lasting evidence of human presence.",
      },
      {
        type: "heading",
        text: "Off-Grid Capability",
      },
      {
        type: "paragraph",
        text: "Many eco-tourism sites operate in locations without access to utilities. Modular structures can be designed for complete off-grid operation, integrating solar power, rainwater harvesting, and waste management systems. This independence eliminates the need for utility infrastructure that would further impact the site.",
      },
      {
        type: "heading",
        text: "Authentic Experience",
      },
      {
        type: "paragraph",
        text: "The geometric forms of ZOME structures create a sense of shelter and comfort while maintaining visual and physical connection to the surrounding landscape. Large windows and skylights bring the environment inside, while the unique spaces create memorable experiences that guests value and share.",
      },
      {
        type: "heading",
        text: "Economic Viability",
      },
      {
        type: "paragraph",
        text: "Eco-tourism operators often work with limited capital in remote locations where construction costs can be prohibitive. The reduced construction timeline and costs of modular structures make projects financially feasible that would otherwise remain theoretical. The ability to start small and expand based on demand further reduces financial risk.",
      },
    ],
  },
};

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  // Simulate network delay for CMS fetch
  // await new Promise((resolve) => setTimeout(resolve, 100));
  return blogPosts[slug] || null;
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  return Object.values(blogPosts);
}
