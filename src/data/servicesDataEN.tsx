import React from "react";
import {
  Settings,
  ShoppingCart,
  Truck,
  MonitorSmartphone,
  TrendingUp,
  Building2
} from "lucide-react";

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
    title: "We Manage and Grow Your Wildberries & Lamoda Sales",
    metaTitle: "Wildberries and Lamoda Sales Management | Russian Market",
    metaDescription: "We manage your sales processes end-to-end in Russia's largest marketplaces, increase your performance, and scale your brand.",
    description: "We manage your sales processes end-to-end in Russia's largest marketplaces, increase your performance, and scale your brand.",
    forWhom: (
      <ul className="list-disc pl-5 space-y-2 text-[15px]">
        <li>Brands that want to actively sell in the Russian market</li>
        <li>Those who have a Wildberries or Lamoda store but cannot grow</li>
        <li>Companies that want to manage their sales processes professionally</li>
      </ul>
    ),
    contentSections: [
      {
        title: "Why is it difficult to sell in the marketplace?",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Selling on Wildberries and Lamoda has high potential, but if not managed correctly, it can lead to serious losses:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Incorrect pricing and low profit margin</li>
              <li>Products not being visible</li>
              <li>Errors in campaign and advertising management</li>
              <li>Stock and operational mismatch</li>
            </ul>
            <p>Many brands fail to achieve sustainable sales despite opening a store.</p>
          </div>
        )
      },
      {
        title: "What do we do?",
        content: (
          <div className="space-y-4 text-slate-600">
            <p className="font-semibold text-primary-500">We don't just upload products.</p>
            <p>We build and manage a system that increases your sales performance.<br/>On your behalf:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>We optimize your products</li>
              <li>We create the right pricing strategy</li>
              <li>We manage campaigns and advertisements</li>
              <li>We continuously analyze sales performance</li>
            </ul>
            <p><strong>Goal:</strong> More sales, higher profitability</p>
          </div>
        )
      },
      {
        title: "Scope of Sales Management",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>We manage the entire process operationally and strategically:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Product upload and content optimization</li>
              <li>Pricing and competition analysis</li>
              <li>Campaign management</li>
              <li>Advertising and increasing visibility</li>
              <li>Stock tracking and planning</li>
              <li>Performance reporting</li>
            </ul>
          </div>
        )
      },
      {
        title: "Performance-Oriented Approach",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Sales do not happen just by uploading products. It requires continuous analysis and optimization.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Which product sells how much?</li>
              <li>Which price range is more profitable?</li>
              <li>Which campaigns perform better?</li>
            </ul>
            <p>By analyzing this data, we grow your sales sustainably.</p>
          </div>
        )
      },
      {
        title: "Operational Integration",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Sales processes work integrated with your operational infrastructure:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Insales integration</li>
              <li>Stock synchronization</li>
              <li>Order management</li>
              <li>Centralized control panel</li>
            </ul>
            <p><strong>Result:</strong> A systematic and scalable structure instead of manual processes</p>
          </div>
        )
      },
      {
        title: "Conclusion",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>A properly managed marketplace account turns into a strong revenue channel for your brand.</p>
            <p>When you work with us:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>You increase your sales</li>
              <li>You reduce operational errors</li>
              <li>You achieve profitable and sustainable growth</li>
            </ul>
          </div>
        )
      }
    ],
    faqs: [
      { q: "How to perform Wildberries sales management?", a: "It is done not only with product listings but also with SEO product descriptions, price competition analysis, and effective campaign setups." },
      { q: "Is it hard to sell on Lamoda?", a: "Lamoda's catalog acceptance standards are stricter, and brand image is highly valued. You can increase sales to high levels by creating the right profile through optimization." },
      { q: "Is ad management necessary?", a: "Absolutely yes. In-platform ads are essential to stand out in the competition and increase organic searches." },
      { q: "How long does it take for sales to increase?", a: "Depending on the account's state and the sector, increases begin to be observed within 2 to 4 weeks as algorithms respond to the optimizations made." }
    ]
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
    title: "Brand Building and Performance Management",
    metaTitle: "Russia E-Commerce Marketing & Brand Building",
    metaDescription: "We don't just enter your brand into the market; we grow your sales with data-driven strategies.",
    description: "Selling in the Russian market is critical, but sustainably growing sales is equally important. We support your brand with data-driven strategies.",
    contentSections: [
      {
        title: "Why is performance management necessary?",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Uploading products to marketplaces is not enough on its own.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Products must be visible</li>
              <li>They must reach the right target audience</li>
              <li>They need to stand out from the competition</li>
            </ul>
            <p>Poorly managed accounts sell well below their potential.</p>
          </div>
        )
      }
    ],
    faqs: []
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
            <ul className="list-disc pl-5 space-y-3">
              <li>Selection of the most advantageous tax model (OSN, USN) in Russia according to the company structure.</li>
              <li>Clear calculation of profit margins (Customs + Logistics + Marketplace Commission + Marketing).</li>
              <li>E-commerce accounting services (Z reports, return invoicing).</li>
              <li>Transfer of funds (Ruble, Yuan, etc.) accumulated in the bank account in Russia to your country perfectly in accordance with international legal regulations.</li>
              <li>Corporate tax planning according to double taxation prevention agreements.</li>
            </ul>
          </div>
        )
      }
    ],
    faqs: [
      { q: "How much are the commission rates on Russian marketplaces?", a: "Although it varies by category, service and logistics commissions generally ranging from 10% to 25% (in the case of FBO) are reflected." },
      { q: "Can I bring my money back safely?", a: "Yes, depending on your company and legal exports, funding and repayment are safely carried out through banks that process active Ruble and Yuan transactions." }
    ]
  }
};
