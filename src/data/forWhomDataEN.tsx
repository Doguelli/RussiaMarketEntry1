import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Droplets, ShoppingBag, Factory, Users } from "lucide-react";
import { ForWhomContent } from "./forWhomData";

export const forWhomDataEN: ForWhomContent[] = [
  {
    id: "textile-brands",
    slug: "tekstil-markalari",
    title: "Russian Market Solution for Textile Brands",
    shortTitle: "Textile Brands",
    description: "Russia is the biggest growth opportunity for Turkish textile brands. However, success is possible not only by shipping products, but with an end-to-end managed operation.",
    icon: <ShoppingBag className="w-4 h-4" />,
    color: "text-primary-500",
    bgColor: "bg-primary-500",
    lightColor: "bg-primary-50",
    content: (
      <>
        <p className="text-[18px] leading-relaxed text-slate-600 mb-6 max-w-4xl">
          The Russian textile and apparel market offers a unique opportunity with its high volume and strong interest in Turkish brands. For women's, men's, children's, and home textile manufacturers, this market can be a profitable growth engine when the right steps are taken.
        </p>

        <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-2xl mb-12">
          <p className="text-primary-700 font-medium text-[18px]">
            We bring your brand's story to Russia and professionally manage your sales operations end-to-end.
          </p>
          <div className="mt-4">
            <Link to="/iletisim" className="inline-flex items-center gap-2 font-bold text-accent-500 hover:text-accent-600">
              👉 Apply Now
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-[24px] font-bold text-primary-500 mb-6">What We Do</h3>
            <ul className="space-y-3">
              {[
                "Marketplace (WB, Lamoda) account setup",
                "Product listing and content optimization",
                "Brand positioning and ad management",
                "Determining pricing strategies",
                "Logistics and FBO/FBS warehouse management",
                "Minimizing return rates"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600">
                  <span className="w-2 h-2 rounded-full bg-primary-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  },
  {
    id: "manufacturers",
    slug: "ureticiler",
    title: "Russian Market Solution for Manufacturers",
    shortTitle: "Manufacturers",
    description: "Don't settle for B2B exports alone. Achieve high profitability by delivering your production power directly to the end user in Russia with the consignment model.",
    icon: <Factory className="w-4 h-4" />,
    color: "text-accent-500",
    bgColor: "bg-accent-500",
    lightColor: "bg-accent-50",
    content: (
      <>
        <p className="text-[18px] leading-relaxed text-slate-600 mb-6 max-w-4xl">
          In addition to wholesale, presenting your manufactured products directly to consumers is the most effective way to maximize profit margins. By reducing risks with the consignment model, you can reach high sales volumes even without being a brand.
        </p>

        <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-2xl mb-12">
          <p className="text-primary-700 font-medium text-[18px]">
            Combine your supply power with our operational experience, and let's connect your products directly with Russian consumers.
          </p>
          <div className="mt-4">
            <Link to="/iletisim" className="inline-flex items-center gap-2 font-bold text-accent-500 hover:text-accent-600">
              👉 Apply Now
            </Link>
          </div>
        </div>
      </>
    )
  },
  {
    id: "ecommerce-entrepreneurs",
    slug: "e-ticaret-girisimcileri",
    title: "Russian Market Solution for E-Commerce Entrepreneurs",
    shortTitle: "E-Commerce Firms",
    description: "Building an e-commerce business from scratch is complex. We design a 'Turnkey' operation for you with correct product selection, marketplace, and Insales integration.",
    icon: <Users className="w-4 h-4" />,
    color: "text-[#005BFF]",
    bgColor: "bg-[#005BFF]",
    lightColor: "bg-primary-50",
    content: (
      <>
         <p className="text-[18px] leading-relaxed text-slate-600 mb-6 max-w-4xl">
          If you want to start a new venture by combining your e-commerce vision with the Russian market, the right infrastructure is everything.
        </p>

        <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-2xl mb-12">
          <p className="text-primary-700 font-medium text-[18px]">
            The infrastructure to turn your idea into sales is ready with us, focus on your own business without taking risks.
          </p>
          <div className="mt-4">
            <Link to="/iletisim" className="inline-flex items-center gap-2 font-bold text-accent-500 hover:text-accent-600">
              👉 Apply Now
            </Link>
          </div>
        </div>
      </>
    )
  },
  {
    id: "cosmetics",
    slug: "kozmetik-ureticileri",
    title: "Russian Market Solution for Cosmetics Manufacturers",
    shortTitle: "Cosmetics Mfrs.",
    description: "The Russian cosmetics market has a high volume. We manage your product registration, legislation, and marketplace processes end-to-end.",
    icon: <Droplets className="w-4 h-4" />,
    color: "text-[#FF007A]",
    bgColor: "bg-[#FF007A]",
    lightColor: "bg-pink-50",
    content: (
      <>
        <p className="text-[18px] leading-relaxed text-slate-600 mb-6 max-w-4xl">
          The Russian cosmetics and personal care market offers significant growth opportunity for producers thanks to its high consumption volume and strong online sales infrastructure.
        </p>
        
        <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-2xl mb-12">
          <p className="text-primary-700 font-medium text-[18px]">
            We open cosmetics producers' products for sale in the Russian market and manage the entire operational process end-to-end.
          </p>
          <div className="mt-4">
            <Link to="/iletisim" className="inline-flex items-center gap-2 font-bold text-accent-500 hover:text-accent-600">
              👉 Apply Now
            </Link>
          </div>
        </div>
      </>
    )
  }
];
