import React from "react";
import { Link } from "react-router-dom";
import {
  Settings,
  ShoppingCart,
  Truck,
  MonitorSmartphone,
  TrendingUp,
  Building2,
  Landmark,
  PackageCheck,
  Target
} from "lucide-react";
import { servicePath, servicesPath, contactPath } from "@/utils/ruPaths";
import { medicalServiceEN } from "./medicalServiceDetail";
import { blogDetailPath } from "@/utils/blogLanguages";

export const serviceDetailsEN: Record<string, any> = {
  "operasyon-kurulumu": {
    icon: Settings,
    title: "We Set Up Your E-Commerce Operations in Russia",
    metaTitle: "Russia E-Commerce Operations Setup | Company and Infrastructure",
    metaDescription: "We provide end-to-end management of Wildberries, Lamoda, logistics, tax, and digital infrastructure processes to ensure a fast and sustainable entry to the Russian market.",
    description: "We provide end-to-end management of Wildberries, Lamoda, logistics, tax, and digital infrastructure processes to ensure a fast and sustainable entry to the Russian market.",
    forWhom: (
      <ul className="list-disc pl-5 space-y-2 text-[15px]">
        <li>Textile and e-commerce brands</li>
        <li>Manufacturers looking to expand internationally</li>
        <li>Companies with high sales targets</li>
      </ul>
    ),
    contentSections: [
      {
        title: "Why is it difficult to enter the Russian market?",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>While e-commerce in Russia has high potential, it also involves significant operational challenges:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Complexity of the tax system and legal processes</li>
              <li>Management of logistics and delivery processes</li>
              <li>Adaptation process to Wildberries and Lamoda platforms</li>
              <li>Manual management of orders, stock, and operational processes</li>
              <li>Financial losses due to incorrect setup</li>
            </ul>
            <p>Many brands lose time and money when entering the market because they fail to plan these processes correctly.</p>
          </div>
        )
      },
      {
        title: "What do we do?",
        content: (
          <div className="space-y-4 text-slate-600">
            <p className="font-semibold text-primary-500">We don't just provide consulting.</p>
            <p>We set up an integrated operational system where you can sell in Russia.<br/>On your behalf:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>We establish the company and tax infrastructure</li>
              <li>We set up your Wildberries and Lamoda stores</li>
              <li>We plan and manage the logistics process</li>
              <li>We integrate the entire system with the Insales infrastructure</li>
              <li>We build a ready-to-sell, sustainable structure</li>
            </ul>
            <p><strong>Goal:</strong> To make you ready to sell in the shortest time and to build a scalable system.</p>
          </div>
        )
      },
      {
        title: "Scope of Operations Setup",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>We manage all steps of the setup process end-to-end:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Company structuring</li>
              <li>Setup of the tax system</li>
              <li>Opening marketplace accounts</li>
              <li>Product preparation and listing process</li>
              <li>Logistics planning</li>
              <li>Digital infrastructure setup (Insales)</li>
              <li>Operation and process design</li>
            </ul>
          </div>
        )
      },
      {
        title: "6-Step Operational Model",
        content: (
          <div className="space-y-6 text-slate-600">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="font-bold text-accent-500 mb-2">1. Analysis and Planning</div>
                <p className="text-[14px]">Your products, target price, and market suitability are analyzed</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="font-bold text-accent-500 mb-2">2. Company and Tax Setup</div>
                <p className="text-[14px]">A structure suitable for Russian operations is created</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="font-bold text-accent-500 mb-2">3. Marketplace Setup</div>
                <p className="text-[14px]">Wildberries and Lamoda accounts are opened and configured</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="font-bold text-accent-500 mb-2">4. Digital System Setup</div>
                <p className="text-[14px]">Insales infrastructure is installed and the whole system is integrated</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="font-bold text-accent-500 mb-2">5. Logistics Planning</div>
                <p className="text-[14px]">Shipping and warehouse processes are organized</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="font-bold text-accent-500 mb-2">6. Transition to Sales</div>
                <p className="text-[14px]">The operation is activated</p>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Integrated Digital Infrastructure (Insales)",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>For the operation to be sustainable, we establish a strong system infrastructure.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Gathering all orders in a single panel</li>
              <li>Synchronizing your stock</li>
              <li>Integration with marketplaces</li>
              <li>Automation of operational processes</li>
            </ul>
            <p><strong>Result:</strong> A systematic and scalable structure instead of manual processes</p>
          </div>
        )
      },
      {
        title: "Logistical Advantage",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>The most critical point of the operation is the right logistics model.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Shipping plan originating from Turkey</li>
              <li>Alternative logistics solutions (including the Kyrgyzstan route)</li>
              <li>Management of warehouse and return processes</li>
            </ul>
            <p><strong>Right logistics =</strong> Faster delivery + Higher sales</p>
          </div>
        )
      },
      {
        title: "Financial Structure",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>One of the most critical issues in setting up an operation is financial planning.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Setting up the tax structure correctly</li>
              <li>Commission and cost calculations</li>
              <li>Creating a net profit scenario</li>
            </ul>
            <p><strong>Goal:</strong> To build a sustainable and scalable structure</p>
          </div>
        )
      },
      {
        title: "Conclusion",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>The biggest difference when entering the Russian market is made by a properly established operation.</p>
            <p>When you work with us:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>You don't build processes from scratch</li>
              <li>You minimize risks</li>
              <li>You start selling faster</li>
              <li>You obtain a systematic and scalable structure</li>
            </ul>
          </div>
        )
      }
    ],
    faqs: [
      { q: "Is it mandatory to establish a company in Russia?", a: "Establishing a company is generally necessary to open an official store in marketplaces and provide tax optimization, but we also investigate alternative models such as Ozon Global." },
      { q: "How long does it take to open a Wildberries and Lamoda store?", a: "Once the necessary documents are completed and the company is established, stores can be made ready for sale within a few weeks." },
      { q: "Why is Insales integration necessary?", a: "As the operation grows, manual processes lead to errors. Insales automatically synchronizes your inventory and orders across all platforms." },
      { q: "How long does it take to make the first sale?", a: "After the store is opened and the logistics process is completed, sales can begin from the first day with the right advertising setup." },
      { q: "How does the logistics process work?", a: "Products from Turkey are delivered to warehouse/fulfillment points (FBO), and when an order arrives, it goes out for distribution within Russia from there." }
    ]
  },

  "pazaryeri-yonetimi": {
    icon: ShoppingCart,
    title: "We Manage and Grow Your Marketplace Sales in Russia",
    subtitle: "Wildberries, Ozon, Yandex Market and Lamoda",
    metaTitle: "Wildberries, Ozon, Yandex Market & Lamoda Sales Management | Russia",
    metaDescription:
      "We manage product, pricing, campaigns, advertising and sales operations on Wildberries, Ozon, Yandex Market and Lamoda — and grow your e-commerce performance in Russia.",
    description:
      "We run your sales operations on Russia’s leading marketplaces as one integrated system.",
    lead:
      "From store setup and product content to pricing, campaigns, advertising, inventory, performance and operations, we manage the full cycle so your brand can grow sales in Russia sustainably.",
    ctaLabel: "Request a Pre-Analysis",
    forWhom: (
      <ul className="list-disc pl-5 space-y-2 text-[15px]">
        <li>Brands that manufacture in Turkey</li>
        <li>Brands entering the Russian market</li>
        <li>Companies scaling marketplace sales in Russia</li>
        <li>Brands expanding across multiple marketplace channels</li>
        <li>Manufacturers building operations in Russia</li>
      </ul>
    ),
    contentSections: [
      {
        title: "Selling on Russia’s Key Marketplaces",
        content: (
          <div className="space-y-5 text-slate-600">
            <p>
              Growth in Russian e-commerce comes from choosing the right marketplace and managing product positioning, pricing, advertising and operations together. Across our{" "}
              <Link to={servicesPath("en")} className="text-accent-500 font-semibold hover:underline">
                services
              </Link>
              , we operationally manage Wildberries, Ozon, Yandex Market and Lamoda.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  name: "Wildberries",
                  accent: "#CB11AB",
                  text: "One of Russia’s largest marketplaces. Strong traffic and sales potential across fashion and broad consumer categories.",
                  blogSlug: "wildberriesde-satis-yapmak",
                },
                {
                  name: "Ozon",
                  accent: "#005BFF",
                  text: "A scalable sales channel with a wide category structure and strong fulfillment infrastructure.",
                  blogSlug: "ozonda-satis-yapmak",
                },
                {
                  name: "Yandex Market",
                  accent: "#111111",
                  text: "A marketplace close to the Yandex ecosystem. Catalog, pricing and visibility management are critical.",
                },
                {
                  name: "Lamoda",
                  accent: "#1A1A1A",
                  text: "A fashion and lifestyle marketplace. Catalog standards and product presentation directly shape brand perception.",
                  blogSlug: "lamodaya-nasil-girilir",
                },
              ].map((p) => {
                const cardClass =
                  "relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 p-4";
                const linkClass = `${cardClass} transition-all duration-[225ms] ease-out hover:-translate-y-1 hover:shadow-md hover:border-primary-200/80 cursor-pointer block`;
                const inner = (
                  <>
                    <span
                      aria-hidden
                      className="absolute left-0 top-0 bottom-0 w-[3px]"
                      style={{ background: p.accent }}
                    />
                    <p className="font-bold text-primary-500 mb-1">{p.name}</p>
                    <p className="text-[14px] leading-relaxed">{p.text}</p>
                  </>
                );
                return p.blogSlug ? (
                  <Link key={p.name} to={blogDetailPath(p.blogSlug, "en")} className={linkClass}>
                    {inner}
                  </Link>
                ) : (
                  <div key={p.name} className={cardClass}>
                    {inner}
                  </div>
                );
              })}
            </div>
            <p className="text-[14px]">
              Related guides:{" "}
              <Link to={blogDetailPath("wildberriesde-satis-yapmak", "en")} className="text-accent-500 font-semibold hover:underline">
                Selling on Wildberries
              </Link>
              {" · "}
              <Link to={blogDetailPath("ozonda-satis-yapmak", "en")} className="text-accent-500 font-semibold hover:underline">
                Selling on Ozon
              </Link>
              {" · "}
              <Link to={blogDetailPath("lamodaya-nasil-girilir", "en")} className="text-accent-500 font-semibold hover:underline">
                Entering Lamoda
              </Link>
            </p>
          </div>
        ),
      },
      {
        title: "Why is marketplace selling difficult?",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Selling on Wildberries, Ozon, Yandex Market and Lamoda has high potential — but poor management can create serious losses:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Incorrect pricing and low margins</li>
              <li>Products that stay invisible</li>
              <li>Campaign and advertising mistakes</li>
              <li>Inventory and operations misalignment</li>
            </ul>
            <p>
              Many brands open a store yet never reach sustainable sales. Marketplace management therefore goes far beyond uploading products — it requires ongoing sales operations.
            </p>
          </div>
        ),
      },
      {
        title: "We Manage Every Stage of Your Marketplace Operation",
        content: (
          <div className="space-y-4 text-slate-600">
            <p className="font-semibold text-primary-500">
              We don’t just upload products. We build and run a system that improves sales performance.
            </p>
            <p>We manage the process operationally and strategically:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Store and operations setup</li>
              <li>Product upload and content management</li>
              <li>Title, description and search optimization</li>
              <li>Pricing and competitive analysis</li>
              <li>Campaign and promotion management</li>
              <li>In-marketplace advertising</li>
              <li>Inventory tracking and planning</li>
              <li>Order and operations tracking</li>
              <li>Sales performance analysis</li>
              <li>Profitability and product performance analysis</li>
              <li>Logistics and fulfillment coordination</li>
              <li>Systems and integrations (including Insales)</li>
            </ul>
            <p>
              <strong>Goal:</strong> More sales, higher profitability and a scalable marketplace operation.
            </p>
          </div>
        ),
      },
      {
        title: "Wildberries Sales Management",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Wildberries sales management is not just listing products — it combines SEO product descriptions, competitive pricing analysis, campaign design and continuous performance tracking.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Store management and product cards</li>
              <li>Content optimization and visibility</li>
              <li>Pricing, campaigns and advertising</li>
              <li>Inventory / sales tracking and performance analysis</li>
            </ul>
            <p className="text-[14px]">
              <Link to={blogDetailPath("wildberries-algoritmasi-nasil-calisir", "en")} className="text-accent-500 font-semibold hover:underline">
                How the Wildberries algorithm works
              </Link>
              {" · "}
              <Link to={blogDetailPath("wildberries-depo-stratejisi-basarili-satis", "en")} className="text-accent-500 font-semibold hover:underline">
                Warehouse strategy
              </Link>
            </p>
          </div>
        ),
      },
      {
        title: "Ozon Sales Management",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Sustainable growth on Ozon comes from store operations, product cards, pricing, campaigns, advertising and regular sales monitoring. Logistics and fulfillment coordination also directly affect results.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Store operations and product cards</li>
              <li>Pricing, campaigns and advertising</li>
              <li>Sales / performance monitoring</li>
              <li>Logistics and fulfillment coordination</li>
            </ul>
            <p className="text-[14px]">
              <Link to={blogDetailPath("ozonda-satis-yapmak", "en")} className="text-accent-500 font-semibold hover:underline">
                Selling on Ozon
              </Link>
            </p>
          </div>
        ),
      },
      {
        title: "Yandex Market Sales Management",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              A strong Yandex Market presence requires catalog management, pricing, campaigns, advertising and sales performance managed together. Where relevant, it can be supported by visibility work within the wider Yandex ecosystem.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Marketplace presence and catalog management</li>
              <li>Pricing and campaign management</li>
              <li>Advertising and sales / performance monitoring</li>
              <li>Growth support aligned with the Yandex ecosystem</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Lamoda Sales Management",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Lamoda’s catalog acceptance standards are stricter and brand image matters. With the right product presentation, pricing, campaigns and operational coordination, sales can grow sustainably.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Marketplace sales and product presentation</li>
              <li>Pricing and campaigns</li>
              <li>Operational coordination</li>
              <li>Performance tracking</li>
            </ul>
            <p className="text-[14px]">
              <Link to={blogDetailPath("lamodaya-nasil-girilir", "en")} className="text-accent-500 font-semibold hover:underline">
                How to enter Lamoda
              </Link>
            </p>
          </div>
        ),
      },
      {
        title: "Marketplace Advertising and Sales Growth",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Marketplace advertising is an integral part of sales management. In-platform ads are critical to stand out and improve visibility.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>In-marketplace advertising management</li>
              <li>Product visibility and campaign optimization</li>
              <li>Ad performance and conversion-focused improvement</li>
              <li>Sales and profitability monitoring</li>
            </ul>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5 mt-2">
              <h3 className="font-bold text-primary-500 text-[18px] mb-2">
                We Also Create Demand Outside the Marketplace
              </h3>
              <p className="mb-3">
                Marketplace sales can be supported with Yandex Ads, VK Ads and Telegram Native Advertising. Those channels belong to our broader digital marketing service — this page stays focused on marketplace operations and sales management.
              </p>
              <Link
                to={servicePath("marka-buyutme", "en")}
                className="inline-flex text-accent-500 font-bold hover:underline"
              >
                Explore Digital Marketing Solutions →
              </Link>
            </div>
          </div>
        ),
      },
      {
        title: "Performance-Oriented Approach",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Sales do not happen just by uploading products. Continuous analysis and optimization are required.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Which product sells how much?</li>
              <li>Which price range is more profitable?</li>
              <li>Which campaigns perform better?</li>
            </ul>
            <p>By analyzing this data, we grow your sales sustainably.</p>
          </div>
        ),
      },
      {
        title: "From Sales to Logistics, Operations to Systems",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Marketplace sales cannot be managed separately from inventory, fulfillment, warehousing, logistics, integrations and order operations. Sales processes must work with your operational infrastructure.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Insales integration and inventory sync</li>
              <li>Order management and centralized control</li>
              <li>Logistics / fulfillment coordination</li>
            </ul>
            <p className="text-[14px] space-x-1">
              <Link to={servicePath("lojistik-ve-depo", "en")} className="text-accent-500 font-semibold hover:underline">
                Logistics & warehousing
              </Link>
              <span>·</span>
              <Link to={servicePath("sistem-ve-entegrasyon", "en")} className="text-accent-500 font-semibold hover:underline">
                Systems & integration
              </Link>
              <span>·</span>
              <Link to={servicePath("operasyon-kurulumu", "en")} className="text-accent-500 font-semibold hover:underline">
                Operations setup
              </Link>
              <span>·</span>
              <Link to={blogDetailPath("wildberries-ozon-lojistik-yonetimi-stok-stratejisi", "en")} className="text-accent-500 font-semibold hover:underline">
                WB & Ozon logistics guide
              </Link>
              <span>·</span>
              <Link to={blogDetailPath("rusyada-e-ticaret-lojistigi-2026", "en")} className="text-accent-500 font-semibold hover:underline">
                E-commerce logistics 2026
              </Link>
            </p>
            <p>
              <strong>Result:</strong> A systematic, scalable structure instead of manual processes.
            </p>
          </div>
        ),
      },
      {
        title: "Who Is This For?",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              This service is designed for companies with a product portfolio, manufacturing capability, brand or commercial potential. We focus on firms building sustainable sales and operations in Russia — not one-product trial sellers.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Brands that manufacture in Turkey</li>
              <li>Brands entering the Russian market</li>
              <li>Companies scaling marketplace sales in Russia</li>
              <li>Brands expanding across multiple marketplace channels</li>
              <li>Manufacturers building their own operations in Russia</li>
            </ul>
          </div>
        ),
      },
      {
        title: "How We Work",
        content: (
          <div className="space-y-4 text-slate-600">
            {[
              { n: "01", t: "Pre-Analysis", d: "We assess your products, brand and potential in Russia." },
              { n: "02", t: "Channel & Model", d: "We define the right marketplace and sales model for your product." },
              { n: "03", t: "Setup", d: "We prepare store, product, pricing, operations and logistics foundations." },
              { n: "04", t: "Sales & Optimization", d: "We continuously optimize sales, advertising, campaigns and product performance." },
              { n: "05", t: "Ongoing Management", d: "We track operations and performance regularly to manage growth." },
            ].map((s) => (
              <div key={s.n} className="flex gap-4 border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                <span className="font-extrabold text-accent-500 text-[18px] w-10 flex-shrink-0">{s.n}</span>
                <div>
                  <p className="font-bold text-primary-500">{s.t}</p>
                  <p>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        ),
      },
      {
        title: "Outcome",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>A well-managed marketplace account becomes a strong revenue channel for your brand.</p>
            <p>Working with us, you:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Increase sales</li>
              <li>Reduce operational errors</li>
              <li>Achieve profitable, sustainable growth</li>
            </ul>
            <Link to={contactPath("en")} className="inline-flex text-accent-500 font-bold hover:underline">
              Request a Pre-Analysis →
            </Link>
          </div>
        ),
      },
    ],
    faqs: [
      {
        q: "Which marketplaces do you manage?",
        a: "We manage store, product, pricing, campaign, advertising and sales operations on Wildberries, Ozon, Yandex Market and Lamoda.",
      },
      {
        q: "Do you work with Ozon?",
        a: "Yes. On Ozon we manage store operations, product cards, pricing, campaigns, advertising and performance tracking, and we connect logistics coordination to the sales process.",
      },
      {
        q: "Do you work with Yandex Market?",
        a: "Yes. On Yandex Market we manage catalog, pricing, campaigns, advertising and sales performance, and support growth within the broader Yandex ecosystem when relevant.",
      },
      {
        q: "How do you manage Wildberries and Lamoda sales?",
        a: "Not only product listings — also SEO product descriptions, competitive pricing analysis, effective campaign setups and continuous performance tracking.",
      },
      {
        q: "Is it hard to sell on Lamoda?",
        a: "Lamoda’s catalog acceptance standards are stricter and brand image is highly valued. With the right optimized profile, sales can reach strong levels.",
      },
      {
        q: "Do you manage marketplace advertising?",
        a: "Yes. In-platform ads, visibility and conversion-focused campaign optimization are part of sales management. For Yandex Ads, VK Ads and Telegram outside the marketplace, see our digital growth service.",
      },
      {
        q: "Can you manage logistics and fulfillment?",
        a: "We plan marketplace sales together with inventory, warehousing and fulfillment. Logistics work is coordinated with our logistics and warehousing service.",
      },
      {
        q: "Do you support companies entering the Russian market?",
        a: "Yes. We plan channel selection, store setup, product readiness, operations and sales management together for market entry.",
      },
      {
        q: "Can you manage multiple marketplaces at once?",
        a: "Yes. Depending on product and operational capacity, we can set up and manage multiple channels in parallel.",
      },
      {
        q: "Is ad management necessary?",
        a: "Absolutely. In-platform ads are essential to compete and support organic discovery.",
      },
      {
        q: "How long until sales increase?",
        a: "It depends on the account and category, but improvements often begin within 2 to 4 weeks as algorithms respond to optimizations.",
      },
    ],
  },

  "lojistik-ve-depo": {
    icon: Truck,
    title: "Russian Logistics and Supply Chain Management",
    metaTitle: "Russia E-Commerce Logistics, Warehouse, and Fulfillment",
    metaDescription: "In the Russian e-commerce market, we safely deliver your products from your production process in Turkey to the end user in Russia.",
    description: "We manage all logistics and operations processes end-to-end, from your production process in Turkey to the end user in Russia.",
    forWhom: (
      <ul className="list-disc pl-5 space-y-2 text-[15px]">
        <li>Exporters who want to deliver quickly to customers in Russia</li>
        <li>Brands that want to manage their supply chain and customs processes flawlessly</li>
      </ul>
    ),
    contentSections: [
      {
        title: "Why is logistics critical in Russia?",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Russia's vast geography and distribution structure place logistics at the center of the operation.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Long distances and different distribution regions</li>
              <li>Direct impact of delivery time on sales performance</li>
              <li>Marketplace algorithms operating on a stock and speed basis</li>
            </ul>
            <p><strong>Late delivered product = lost sale</strong></p>
          </div>
        )
      },
      {
        title: "What do we do?",
        content: (
          <div className="space-y-4 text-slate-600">
            <p className="font-semibold text-primary-500">We don't just ship cargo.</p>
            <p>We build an integrated logistics system that supports your sales performance.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>International shipping management</li>
              <li>Management of customs and legal processes</li>
              <li>Warehousing and fulfillment operation</li>
              <li>Return and quality control processes</li>
              <li>Digital system integration (Insales)</li>
            </ul>
            <p><strong>Goal:</strong> Fast delivery + low cost + high sales</p>
          </div>
        )
      },
      {
        title: "International Shipping and Customs Clearance",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>The entire shipping process from Turkey to Russia is professionally managed.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Roadway and alternative route planning</li>
              <li>Customs processes (HS Code, declaration)</li>
              <li>DDP delivery model (including taxes)</li>
              <li>Minimizing legal risks</li>
            </ul>
            <p>The entire process is carried out in accordance with Russian legislation.</p>
          </div>
        )
      },
      {
        title: "Warehousing and Fulfillment Management",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>When your products reach Russia, they are directed to strategic warehouses.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Marketplace warehouses (FBO model)</li>
              <li>Regional distribution centers</li>
              <li>Stock positioning for fast delivery</li>
            </ul>
            <p><strong>Right warehouse =</strong> Advantage of delivery within 24-48 hours</p>
          </div>
        )
      },
      {
        title: "Barcoding and Product Preparation",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Proper preparation of products is mandatory when entering the Russian market.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Chestny Znak labeling</li>
              <li>Marketplace barcoding</li>
              <li>Packaging and quality control</li>
            </ul>
            <p>These processes are managed flawlessly.</p>
          </div>
        )
      },
      {
        title: "Marketplace Integration and Stock Management",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Logistics processes work integrated with the digital infrastructure.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Insales integration</li>
              <li>Stock management from a single panel</li>
              <li>Synchronization across all marketplaces</li>
              <li>Prevention of the risk of selling out of stock</li>
            </ul>
            <p><strong>Result:</strong> Systematic and scalable operation</p>
          </div>
        )
      },
      {
        title: "Returns and Quality Control Management",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>In the Russian market, return processes are an important part of the operation.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Controlling returned products</li>
              <li>Making them suitable for resale</li>
              <li>Reporting damaged products</li>
            </ul>
            <p>Return processes are transformed into a manageable system rather than a cost.</p>
          </div>
        )
      },
      {
        title: "Logistics Operation Flow",
        content: (
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse my-6 bg-white border border-slate-200">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="p-4 border border-slate-200">Phase</th>
                  <th className="p-4 border border-slate-200">Process Details</th>
                  <th className="p-4 border border-slate-200 whitespace-nowrap">Target Time</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <td className="p-4 border border-slate-200"><span className="text-accent-500 font-bold mr-2">01.</span> <strong>Departure Prep</strong></td>
                  <td className="p-4 border border-slate-200">Departure from Turkey warehouse, packaging, and labeling</td>
                  <td className="p-4 border border-slate-200 font-medium whitespace-nowrap text-slate-600">1-2 Business Days</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 border border-slate-200"><span className="text-accent-500 font-bold mr-2">02.</span> <strong>International Transport</strong></td>
                  <td className="p-4 border border-slate-200">Customs clearance and border crossing processes</td>
                  <td className="p-4 border border-slate-200 font-medium whitespace-nowrap text-slate-600">5-7 Business Days</td>
                </tr>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <td className="p-4 border border-slate-200"><span className="text-accent-500 font-bold mr-2">03.</span> <strong>Domestic Distribution in Russia</strong></td>
                  <td className="p-4 border border-slate-200">Delivery to marketplace warehouses</td>
                  <td className="p-4 border border-slate-200 font-medium whitespace-nowrap text-slate-600">2-3 Business Days</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 border border-slate-200"><span className="text-accent-500 font-bold mr-2">04.</span> <strong>Delivery to Customer</strong></td>
                  <td className="p-4 border border-slate-200">Last mile delivery</td>
                  <td className="p-4 border border-slate-200 font-medium whitespace-nowrap text-slate-600">1-3 Business Days</td>
                </tr>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <td className="p-4 border border-slate-200"><span className="text-accent-500 font-bold mr-2">05.</span> <strong>Returns Management</strong></td>
                  <td className="p-4 border border-slate-200">Product inspection and relisting for sale</td>
                  <td className="p-4 border border-slate-200 font-medium whitespace-nowrap text-slate-600">Ongoing</td>
                </tr>
              </tbody>
            </table>
          </div>
        )
      },
      {
        title: "Conclusion",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Logistics in the Russian market is not just a support function; it's the center of the operation.</p>
            <p><strong>Right logistics system =</strong> faster delivery + more sales</p>
          </div>
        )
      }
    ],
    faqs: [
      { q: "How many days does it take for a cargo to reach Russia?", a: "After leaving the Turkey warehouse, your cargo reaches Russia within an average of 5-7 business days, including customs." },
      { q: "What do logistics costs depend on?", a: "Logistics costs vary depending on volume, product characteristics, and delivery speed (standard or express)." },
      { q: "Is it mandatory to use a warehouse?", a: "To achieve the best sales conversion rates and stand out in marketplace algorithms, the FBO (Fulfilled by Operator) model, i.e., local warehouse usage, is recommended." },
      { q: "How are return processes managed?", a: "Returns arriving at the Russian operations warehouse undergo a quality control check, are repackaged, and then shipped back to the marketplace warehouse." }
    ]
  },

  "sistem-ve-entegrasyon": {
    icon: MonitorSmartphone,
    title: "Insales Integration and Operation Automation",
    metaTitle: "InSales E-Commerce Integration | Russian Market",
    metaDescription: "The key to sustainable growth in Russian e-commerce operations is managing processes systematically rather than manually.",
    description: "The key to sustainable growth in Russian e-commerce operations is managing processes systematically rather than manually. We don't just set up your operation; we make it fully integrated and automated with the Insales infrastructure.",
    forWhom: (
      <ul className="list-disc pl-5 space-y-2 text-[15px]">
        <li>Brands selling across multiple platforms (WB, Ozon, Yandex, etc.)</li>
        <li>Companies wanting to entirely eliminate stock and order confusion</li>
      </ul>
    ),
    contentSections: [
      {
        title: "Why is system setup critical?",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Many brands face the following problems after starting to sell:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Stock out of sync</li>
              <li>Messy order management</li>
              <li>Manual operational errors</li>
              <li>Unscalable structure</li>
            </ul>
            <p>These problems halt growth.</p>
          </div>
        )
      },
      {
        title: "What do we provide with Insales?",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>With the Insales infrastructure, the entire operation is managed from a single center:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Consolidating all marketplaces into a single panel</li>
              <li>Centralized management of orders</li>
              <li>Real-time synchronization of stocks</li>
              <li>Automatic update of products</li>
            </ul>
            <p><strong>Result:</strong> A controllable and scalable system</p>
          </div>
        )
      },
      {
        title: "Conclusion",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>A successful e-commerce operation is not just about making sales; it's about setting up the system correctly.</p>
            <p><strong>Right system + right infrastructure = control + speed + growth</strong></p>
          </div>
        )
      }
    ],
    faqs: [
      { q: "What is Insales?", a: "It is one of the most common e-commerce infrastructures in Russia. It works seamlessly with all popular marketplaces and automates your sales operations." }
    ]
  },

  "marka-buyutme": {
    icon: TrendingUp,
    title: "Digital Marketing and Brand Growth in Russia",
    subtitle: "Yandex Ads · VK Ads · Telegram Native Advertising · SEO",
    metaTitle: "Digital Marketing & Brand Growth in Russia | Yandex, VK, Telegram",
    metaDescription:
      "We grow your brand visibility and sales in Russia with Yandex Ads, VK Ads, Telegram Native Advertising, SEO and performance-focused digital marketing.",
    description:
      "We build a digital growth system for your brand in Russia — from visibility to sales.",
    lead:
      "With Yandex Ads, VK Ads, Telegram Native Advertising, SEO and data-driven performance work, we help your brand reach the right audience in Russia and create sustainable demand.",
    ctaLabel: "Request a Pre-Analysis",
    forWhom: (
      <ul className="list-disc pl-5 space-y-2 text-[15px]">
        <li>Companies building brand visibility and demand in Russia</li>
        <li>Established brands scaling marketplaces and digital sales in Russia</li>
        <li>Medical / healthcare and manufacturing companies</li>
        <li>Established businesses entering or already selling in Russia</li>
      </ul>
    ),
    contentSections: [
      {
        title: "We Position Your Brand in Russia’s Digital Ecosystem",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Russia’s digital environment runs on its own channels, search habits and content behavior. Campaigns copied from other markets are often not enough.
            </p>
            <p>
              We position your brand around Yandex, VK and Telegram — aligned with the Russian search ecosystem and local audience behavior. The goal is not just to run ads, but to build sustainable demand and brand growth within our{" "}
              <Link to={servicesPath("en")} className="text-accent-500 font-semibold hover:underline">
                services
              </Link>
              .
            </p>
          </div>
        ),
      },
      {
        title: "Why is performance management necessary?",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Bringing a product or brand to market is not enough on its own. You need to reach the right audience, become visible and stand out. Poorly managed campaigns underperform their potential.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Reach the right audience</li>
              <li>Build visibility and demand</li>
              <li>Manage traffic, conversion and profitability together</li>
            </ul>
            <p>
              That is why we run e-commerce marketing and brand growth with data-driven performance management.
            </p>
          </div>
        ),
      },
      {
        title: "Yandex Ads",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              With Yandex Ads we plan and manage search and network advertising around your business goals — focusing on qualified traffic, product discovery, e-commerce demand and sales.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Search advertising</li>
              <li>Display / network advertising where relevant</li>
              <li>Keyword and audience targeting</li>
              <li>Campaign structure and budget management</li>
              <li>Ad optimization and traffic acquisition</li>
              <li>Conversion tracking and performance analysis</li>
            </ul>
          </div>
        ),
      },
      {
        title: "VK Ads",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              With VK Ads we run campaigns focused on brand visibility, traffic and lead generation among Russian social audiences.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Audience targeting and campaign management</li>
              <li>Brand visibility and traffic</li>
              <li>Lead generation</li>
              <li>Retargeting where supported and appropriate</li>
              <li>Performance analysis</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Telegram Native Advertising",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Telegram is a strong communication and content channel in Russia. For Telegram Native Advertising we research suitable channels and audiences, plan native placements, adapt creative/content and evaluate campaign performance.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Research of relevant Russian Telegram channels</li>
              <li>Native advertising and audience selection</li>
              <li>Campaign planning and creative / content adaptation</li>
              <li>Traffic and lead generation</li>
              <li>Campaign performance evaluation</li>
            </ul>
            <p className="text-[14px] text-slate-500">
              We do not claim direct access to every channel; we proceed by researching suitable channels and audiences for your goals.
            </p>
          </div>
        ),
      },
      {
        title: "SEO and Organic Visibility",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Organic visibility is a long-term growth layer that complements paid traffic. Our primary focus is external search visibility; marketplace SEO is handled only as supporting work when relevant.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Russian-language SEO and keyword research</li>
              <li>Search intent and content strategy</li>
              <li>Technical SEO where needed</li>
              <li>Landing page optimization</li>
              <li>Organic traffic development</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Performance and Conversion Optimization",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              We build a performance system that grows sales sustainably. Everything is managed with data: which channel works better, how traffic quality looks, and how conversion and cost perform.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Campaign performance and traffic quality</li>
              <li>Conversion and cost efficiency</li>
              <li>Data-driven optimization</li>
              <li>Landing page performance</li>
              <li>Lead quality and impact on sales</li>
            </ul>
            <p>
              <strong>Goal:</strong> More traffic + more conversion + higher profitability.
            </p>
          </div>
        ),
      },
      {
        title: "Digital Demand for Medical Brands",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              For medical and healthcare manufacturers, digital marketing supports professional audience outreach and brand visibility. For other industries, our digital work centres on marketplaces and e-commerce sales.
            </p>
            <p>
              This is not a market-research or medical service page — it explains how digital channels support those business models.
            </p>
            <Link
              to={servicePath("medikal-ve-saglik", "en")}
              className="inline-flex text-accent-500 font-bold hover:underline"
            >
              Explore Medical B2B Solutions →
            </Link>
          </div>
        ),
      },
      {
        title: "Marketplace and Digital Marketing Should Work Together",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Marketplace ads create visibility inside the platform. Yandex Ads, VK Ads and Telegram create demand outside it. Together they can support awareness, traffic, product discovery, sales and brand growth.
            </p>
            <p>
              Marketplace operations, product cards, pricing and in-platform advertising belong on our{" "}
              <Link to={servicePath("pazaryeri-yonetimi", "en")} className="text-accent-500 font-semibold hover:underline">
                marketplace management
              </Link>{" "}
              page. This page focuses on external digital demand and brand growth.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Product visibility and campaign coordination</li>
              <li>Aligning keyword and budget discipline across channels</li>
              <li>Scaling ad investment as operations grow</li>
            </ul>
            <p className="text-[14px]">
              <Link to={servicePath("pazaryeri-yonetimi", "en")} className="text-accent-500 font-semibold hover:underline">
                Explore Marketplace Management Solutions →
              </Link>
              {" · "}
              <Link to={blogDetailPath("rusyada-e-ticaret-nasil-yapilir", "en")} className="text-accent-500 font-semibold hover:underline">
                E-commerce in Russia guide
              </Link>
            </p>
          </div>
        ),
      },
      {
        title: "Who Is This For?",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              This service is for companies with a product portfolio, brand or commercial potential — not primarily for individuals testing a single product.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Established brands and manufacturers</li>
              <li>Companies entering or already selling in Russia</li>
              <li>E-commerce companies</li>
              <li>Medical and healthcare manufacturers</li>
              <li>Medical / healthcare companies</li>
            </ul>
          </div>
        ),
      },
      {
        title: "How We Work",
        content: (
          <div className="space-y-4 text-slate-600">
            {[
              { n: "01", t: "Pre-Analysis", d: "We assess your brand, products and goals in Russia." },
              { n: "02", t: "Audience & Channel", d: "We define the right digital channels for your product and objective." },
              { n: "03", t: "Campaigns & Content", d: "We prepare structure and content for Yandex, VK, Telegram and organic channels." },
              { n: "04", t: "Measurement & Optimization", d: "We track traffic, conversion, cost and lead quality." },
              { n: "05", t: "Continuous Growth", d: "We improve campaigns and growth strategy based on data." },
            ].map((s) => (
              <div key={s.n} className="flex gap-4 border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                <span className="font-extrabold text-accent-500 text-[18px] w-10 flex-shrink-0">{s.n}</span>
                <div>
                  <p className="font-bold text-primary-500">{s.t}</p>
                  <p>{s.d}</p>
                </div>
              </div>
            ))}
            <p className="text-[14px] pt-2 space-x-1">
              <Link to={servicePath("operasyon-kurulumu", "en")} className="text-accent-500 font-semibold hover:underline">
                Operations setup
              </Link>
              <span>·</span>
              <Link to={servicePath("sistem-ve-entegrasyon", "en")} className="text-accent-500 font-semibold hover:underline">
                Systems & integration
              </Link>
              <span>·</span>
              <Link to={contactPath("en")} className="text-accent-500 font-semibold hover:underline">
                Contact
              </Link>
            </p>
          </div>
        ),
      },
      {
        title: "Outcome",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Growing in Russia means managing demand, visibility and performance — not only making sales.</p>
            <p>
              <strong>Right strategy + right advertising + right data = sustainable growth</strong>
            </p>
            <Link to={contactPath("en")} className="inline-flex text-accent-500 font-bold hover:underline">
              Request a Pre-Analysis →
            </Link>
          </div>
        ),
      },
    ],
    faqs: [
      {
        q: "Which digital advertising channels do you manage in Russia?",
        a: "We manage campaigns focused on Yandex Ads, VK Ads and Telegram Native Advertising, supported by SEO and performance optimization.",
      },
      {
        q: "Do you manage Yandex Ads?",
        a: "Yes. We manage Yandex Ads with search and, where relevant, network ads, keyword/audience targeting, budget management, optimization and performance analysis.",
      },
      {
        q: "Do you run advertising with VK Ads?",
        a: "Yes. We run VK Ads work for audience targeting, campaign management, visibility, traffic and lead generation.",
      },
      {
        q: "What is Telegram Native Advertising and how is it used?",
        a: "It is a native advertising approach in relevant Telegram channels. We research suitable channels and audiences, adapt content, plan campaigns and evaluate performance — without claiming access to every channel.",
      },
      {
        q: "Do you provide SEO?",
        a: "Yes. We work on Russian-language SEO, keyword and content strategy, landing page optimization and organic visibility.",
      },
      {
        q: "How does digital marketing support e-commerce sales?",
        a: "By creating external traffic and demand it supports product discovery, brand awareness and conversion; together with marketplace operations it can strengthen sales growth.",
      },
      {
        q: "How can medical B2B companies benefit from digital marketing?",
        a: "For professional visibility and relevant institutional audiences in healthcare. For other industries our work focuses on marketplaces and digital sales.",
      },
      {
        q: "What is the difference between marketplace ads and Yandex/VK ads?",
        a: "Marketplace ads create visibility inside the platform. Yandex Ads and VK Ads create demand and traffic outside it. They play different roles and should be planned together.",
      },
      {
        q: "How is campaign performance measured?",
        a: "Traffic, conversion, cost efficiency, lead quality and sales impact are tracked with data and used for optimization. We do not promise guaranteed results or fixed rates.",
      },
      {
        q: "Can you sell without advertising?",
        a: "Especially for new brands, organic visibility takes time. In most cases controlled ad investment is critical to create demand and measurable growth.",
      },
      {
        q: "How much budget is needed?",
        a: "Budget depends on product, category, goals and channels. We typically recommend a stronger launch phase and then a stabilized plan. We do not promise a fixed amount.",
      },
    ],
  },

  "vergi-ve-finans": {
    icon: Building2,
    title: "Tax and Financial Structure",
    metaTitle: "Russia E-commerce Finance and Tax Management",
    metaDescription: "Legal infrastructure consulting in cross-border trade regarding ruble collections, tax planning, and money transfer processes to Turkey.",
    description: "Bringing the money back safely across the border with minimal tax burden is the key to a profitable operation. We design accounting processes in Russia and fund flow processes to your home country.",
    contentSections: [
      {
        title: "Tax and Financial System",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>A solid financial and tax framework determines the long-term profitability and compliance of Russian e-commerce:</p>
            <ul className="list-disc pl-5 space-y-3">
              <li>Selection of the most advantageous tax model (OSN, USN) in Russia according to the company structure</li>
              <li>Clear calculation of profit margins (Customs + Logistics + Marketplace Commission + Marketing)</li>
              <li>E-commerce accounting services (Z reports, return invoicing)</li>
              <li>Transfer of accumulated funds (Ruble, Yuan, etc.) in Russian bank accounts to Turkey in accordance with international legal regulations</li>
              <li>Corporate tax planning according to double taxation prevention agreements</li>
            </ul>
          </div>
        )
      }
    ],
    faqs: [
      { q: "How much are the commission rates on Russian marketplaces?", a: "Although it varies by category, service and logistics commissions generally ranging from 10% to 25% (in the case of FBO) are reflected." },
      { q: "Can I bring my money back safely?", a: "Yes, depending on your company and legal exports, funding and repayment are safely carried out through banks that process active Ruble and Yuan transactions." }
    ]
  },

  "turkiyede-sirket-kurulumu": {
    icon: Landmark,
    title: "We Set Up Your Business in Turkey and Launch Your Commercial Operations",
    metaTitle: "Company Formation and Business Launch in Turkey",
    metaDescription: "For entrepreneurs from Russia and the CIS region who want to set up a company in Turkey, we support not only the incorporation but also the commercial and operational processes needed to get the business running.",
    description: "For entrepreneurs from Russia and the CIS region who want to set up a company in Turkey, we support not only the incorporation but also the commercial and operational processes needed to get the business running.",
    forWhom: (
      <ul className="list-disc pl-5 space-y-2 text-[15px]">
        <li>Entrepreneurs from Russia and the CIS region looking to set up a company in Turkey</li>
        <li>Those seeking end-to-end support from incorporation through to commercial launch</li>
        <li>Foreign investors considering taking over an existing company</li>
      </ul>
    ),
    contentSections: [
      {
        title: "Key Challenges When Starting a Business in Turkey",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>We coordinate everything you need — from incorporation and accounting/tax processes to opening a bank account, residency procedures, and building your commercial infrastructure — through a single structure.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Not knowing the incorporation process and required documents</li>
              <li>Difficulty determining the right company structure</li>
              <li>Managing banking and financial processes</li>
              <li>Keeping up with accounting and tax obligations</li>
              <li>Coordinating residency and related official procedures</li>
              <li>Not knowing how to launch commercial activity once the company is formed</li>
            </ul>
          </div>
        )
      },
      {
        title: "Company Formation",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>For foreign entrepreneurs setting up a new company in Turkey, we plan the incorporation process and carry it out in coordination with the necessary professionals.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Determining the company type</li>
              <li>Incorporation process</li>
              <li>Preparing the required documents</li>
              <li>Coordinating official procedures</li>
            </ul>
          </div>
        )
      },
      {
        title: "Taking Over an Existing Company",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>For entrepreneurs who prefer to take over an existing company rather than starting from scratch, we support the evaluation of suitable companies and coordinate the transfer process.</p>
            <p>We don't recommend simply buying a "ready-made company" without checks on its history, current status, and the transfer itself.</p>
          </div>
        )
      },
      {
        title: "Accounting and Tax",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>We ensure the ongoing accounting and tax processes after incorporation are handled regularly through our certified accountant partner.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Bookkeeping</li>
              <li>Tax processes</li>
              <li>Tax return filings</li>
              <li>Tracking financial obligations</li>
            </ul>
          </div>
        )
      },
      {
        title: "Bank Account",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>We support the preparation of the required documentation and coordination of the process for opening a bank account for the company that will operate commercially in Turkey.</p>
          </div>
        )
      },
      {
        title: "Residency Procedures",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>For foreign entrepreneurs who want to live in Turkey or carry out commercial activity there, we support the application and document preparation for the appropriate residency process.</p>
          </div>
        )
      },
      {
        title: "Setting Up Commercial Operations",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Once the company is formed, the real goal is to launch commercial activity. This is where our e-commerce and digital operations experience in Turkey comes in.</p>
            <p>Depending on your needs, we can also support setting up the following commercial infrastructure:</p>
            <ul className="list-disc pl-5 space-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:space-y-2">
              <li>E-commerce infrastructure</li>
              <li>Website</li>
              <li>Marketplace</li>
              <li>Digital marketing</li>
              <li>Ad management</li>
              <li>SEO</li>
              <li>Social media</li>
              <li>Content</li>
              <li>ERP and integration</li>
              <li>Data and operations management</li>
            </ul>
          </div>
        )
      },
      {
        title: "How Does the Process Work?",
        content: (
          <div className="flex flex-wrap items-center gap-2 text-[14px] font-semibold text-primary-600">
            {["Needs Analysis", "Determining the Company Model", "Incorporation or Existing-Company Option", "Setting Up Accounting & Tax Structure", "Banking Processes", "Residency Processes", "Building Commercial Infrastructure", "Launching Operations"].map((step, i, arr) => (
              <span key={step} className="inline-flex items-center gap-2">
                <span className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-2">{step}</span>
                {i < arr.length - 1 && <span className="text-accent-500">→</span>}
              </span>
            ))}
          </div>
        )
      },
      {
        title: "Why Us?",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>We don't see the company formation process in Turkey as separate from your Russia operations.</p>
            <p>Thanks to our trade, e-commerce, and operations experience between Turkey and Russia, we can also plan the commercial process that follows incorporation.</p>
            <p><strong>Forming a company is the first step. Our goal is for your company to actually start operating.</strong></p>
          </div>
        )
      }
    ],
    faqs: []
  },

  "ithalat-ve-gumruk-yonetimi": {
    icon: PackageCheck,
    title: "We Manage Your Products' Entry Into Russia and Prepare Them for Sale",
    metaTitle: "Import, Customs and Product Compliance Management for Russia",
    metaDescription: "We manage the entire process — from customs and EAC to Chestny ZNAK and labeling — from your product leaving Turkey to it being ready for sale in Russia.",
    description: "Shipping products from Turkey to Russia is not just a logistics operation. Correctly classifying the product, preparing the required documents, managing customs processes, and getting the product ready for sale in Russia are interlinked processes — we plan this from departure in Turkey through to the sales operation in Russia.",
    forWhom: (
      <ul className="list-disc pl-5 space-y-2 text-[15px]">
        <li>Exporters and manufacturers planning to ship products to Russia</li>
        <li>Brands that want to manage customs and compliance processes without errors</li>
        <li>Companies shipping to the Russian market for the first time</li>
      </ul>
    ),
    contentSections: [
      {
        title: "Key Challenges When Shipping Products to Russia",
        content: (
          <div className="space-y-4 text-slate-600">
            <ul className="list-disc pl-5 space-y-2">
              <li>Incorrect customs classification of the product</li>
              <li>Compliance documents not identified in advance</li>
              <li>EAC requirements being overlooked</li>
              <li>Chestny ZNAK scope not checked</li>
              <li>Labeling requirements discovered too late</li>
              <li>Customs and logistics processes planned independently of each other</li>
              <li>Import costs not calculated correctly</li>
            </ul>
          </div>
        )
      },
      {
        title: "Product and Import Analysis",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Before a product is shipped to Russia, we assess its category, technical specifications, and the key requirements to consider during the import process.</p>
          </div>
        )
      },
      {
        title: "Customs and Import Process",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>We support the planning of the customs and logistics process for the commercial shipment from Turkey to Russia.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Commercial documents</li>
              <li>Product information</li>
              <li>Customs process</li>
              <li>Shipment coordination</li>
              <li>Delivery point in Russia</li>
            </ul>
            <p>All of these steps are planned together.</p>
          </div>
        )
      },
      {
        title: "EAC and Compliance",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>We assess the relevant compliance requirements for the product group and support the correct planning of the necessary processes.</p>
            <p>The goal is to avoid document or compliance issues once the product reaches Russia.</p>
          </div>
        )
      },
      {
        title: "Chestny ZNAK",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>For products within the scope of Chestny ZNAK, we plan the marking process and preparing the products for sale.</p>
          </div>
        )
      },
      {
        title: "Labeling and Product Preparation",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>We jointly assess the product information, labeling, and marketplace requirements needed for the product to be offered for sale in the Russian market.</p>
          </div>
        )
      },
      {
        title: "Post-Import Operations",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>For us, import is not the end of the process. How the following chain will work once the product reaches Russia is planned in advance:</p>
            <div className="flex flex-wrap items-center gap-2 text-[14px] font-semibold text-primary-600">
              {["Customs", "Warehouse", "Marketplace", "Stock", "Sales"].map((step, i, arr) => (
                <span key={step} className="inline-flex items-center gap-2">
                  <span className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-2">{step}</span>
                  {i < arr.length - 1 && <span className="text-accent-500">→</span>}
                </span>
              ))}
            </div>
            <p>This way, we connect the import operation directly with the sales and logistics operation.</p>
          </div>
        )
      },
      {
        title: "How Does the Process Work?",
        content: (
          <div className="flex flex-wrap items-center gap-2 text-[14px] font-semibold text-primary-600">
            {["Product Analysis", "Product Classification", "Compliance & Documentation Check", "Import & Customs Plan", "Shipment", "Russian Customs", "Warehouse / Logistics Operation", "Marketplace Preparation"].map((step, i, arr) => (
              <span key={step} className="inline-flex items-center gap-2">
                <span className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-2">{step}</span>
                {i < arr.length - 1 && <span className="text-accent-500">→</span>}
              </span>
            ))}
          </div>
        )
      },
      {
        title: "Why Us?",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>We don't see import as merely a customs transaction. We assess the entire operation, from the product leaving Turkey to it being ready for sale in Russia.</p>
            <p>This approach helps reduce unnecessary costs and operational risks, especially for brands entering the Russian market for the first time.</p>
          </div>
        )
      }
    ],
    faqs: []
  },

  "pazar-arastirmasi-ve-strateji": {
    icon: Target,
    title: "Russia Market Research & E-Commerce Entry Strategy",
    subtitle: "Marketplace research · Pricing and competitors · SKU feasibility · Operations",
    metaTitle: "Russia Market Research & Marketplace Entry Strategy | RME",
    metaDescription: "Russian marketplace research for manufacturers: Wildberries and Ozon competitors, SKU pricing, unit economics and investment feasibility.",
    description: "We evaluate real product demand, competitive positioning and the financial viability of a marketplace launch in Russia.",
    lead: "For established manufacturers and brands we connect product/category analysis, competitor pricing, Wildberries and Ozon channel selection, import costs and first-stock planning. We do not provide general wholesale buyer or dealer sourcing. B2B distributor development is available exclusively for medical and healthcare companies.",
    ctaLabel: "Request Company Market Assessment",
    forWhom: (
      <ul className="list-disc pl-5 space-y-2 text-[15px]">
        <li>{"Established manufacturers and brands"}</li>
        <li>{"Companies with a defined product portfolio and operations"}</li>
        <li>{"Exporters planning marketplace investment in Russia"}</li>
        <li>{"Brands scaling an existing Russia sales operation"}</li>
      </ul>
    ),
    contentSections: [
      { title: "Product and Category Potential", content: (<p className="text-slate-600 leading-relaxed">{"We review demand, competitors and price positioning on Wildberries, Ozon and relevant digital channels. Category growth is not a product-level sales guarantee."}</p>) },
      { title: "SKU Pricing and Unit Economics", content: (<p className="text-slate-600 leading-relaxed">{"We assess product cost, duties, logistics, marketplace fees, advertising and returns under realistic margin scenarios."}</p>) },
      { title: "Initial Inventory and Operations", content: (<p className="text-slate-600 leading-relaxed">{"We evaluate first-shipment volumes, Russian content, compliance, fulfilment and replenishment options."}</p>) },
      { title: "Medical B2B Exception", content: (<p className="text-slate-600 leading-relaxed">{"Distributor, wholesale buyer and institutional purchasing development is scoped only for medical and healthcare projects, not for other sectors."}</p>) },
      { title: "Our Working Method", content: (<p className="text-slate-600 leading-relaxed">{"We assess the company and range, validate competition and channels, then prepare an investment and operating roadmap with measurable decision points."}</p>) },
    ],
    faqs: [
      { q: "Do you find distributors in every industry?", a: "No. B2B distributor and institutional buyer development is exclusively for medical and healthcare. Other industries are served through marketplace research and digital sales operations." },
      { q: "Does research guarantee sales?", a: "No. It helps evaluate opportunities and investment risks; results are not guaranteed." },
      { q: "Who is this service for?", a: "Established companies with a real product portfolio, operational readiness and defined Russia market objectives." },
    ],
  },
  "medikal-ve-saglik": medicalServiceEN,
};
