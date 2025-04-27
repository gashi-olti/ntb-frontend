import Image from "next/image";
import Link from "next/link";

import { Separator } from "../ui/separator";
import { Images } from "../Images";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Container from "../Common/Container";

const footerLinks = {
  platform: {
    title: "PLATFORM",
    links: [
      { label: "Employer of Record", href: "/employer-of-record" },
      { label: "PEO Services", href: "/peo-services" },
      { label: "Company as a Service", href: "/company-as-service" },
      { label: "Work Payments", href: "/work-payments" },
      { label: "Global Payroll", href: "/global-payroll" },
      { label: "Tax Management", href: "/tax-management" },
      { label: "Expenses Management", href: "/expenses-management" },
    ],
  },
  information: {
    title: "INFORMATION",
    links: [
      { label: "Legal Entity", href: "/legal-entity" },
      { label: "Client Invoicing", href: "/client-invoicing" },
      { label: "Payment Requests", href: "/payment-requests" },
      { label: "Global Mobility", href: "/global-mobility" },
      { label: "Employees Benefits", href: "/employee-benefits" },
      { label: "For Startups", href: "/for-startups" },
    ],
  },
  company: {
    title: "COMPANY",
    links: [
      { label: "About", href: "/about" },
      { label: "Our Countries", href: "/countries" },
      { label: "Affiliates", href: "/affiliates" },
      { label: "Partnerships", href: "/partnerships" },
      { label: "Charity", href: "/charity" },
      { label: "Data & Security", href: "/security" },
      { label: "Book a demo", href: "/book-demo" },
      { label: "Contact", href: "/contact" },
    ],
  },
};

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <Container className="py-12 px-4">
        <div className="hidden md:grid md:grid-cols-5 gap-8 md:mt-16">
          <div className="col-span-2">
            <Image
              src={Images.WhiteLogo}
              alt="Native Teams"
              width={229}
              height={41}
            />
          </div>
          {Object.values(footerLinks).map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-white text-sm font-semibold">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <span className="text-sm font-light text-gray-300 transition-colors">
                      {link.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="md:hidden space-y-6 px-4 pb-4">
        <Image
          src={Images.WhiteLogo}
          alt="Native Teams"
          width={180}
          height={32}
        />
        <Accordion type="single" collapsible className="w-full">
          {Object.values(footerLinks).map((section, index) => (
            <AccordionItem
              key={section.title}
              value={`item-${index}`}
              className="border-b-0!"
            >
              <AccordionTrigger className="text-white justify-start! py-2">
                {section.title}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 py-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <span className="text-sm font-normal text-gray-300 transition-colors">
                        {link.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <Separator className="bg-muted/20" />

      <Container className="py-6 px-4 mb-6">
        <div className="flex flex-col relative md:flex-row gap-6 text-xs md:text-sm text-gray-400">
          <p className="text-sm order-1 mx-auto md:order-0 md:mx-0">
            © Native Teams Limited
          </p>
          <div className="flex gap-4 mx-auto md:order-1 md:left-1/2 md:transform md:-translate-x-1/2 md:absolute">
            <Link
              href="/cookie-policy"
              className="hover:text-white transition-colors"
            >
              Cookie Policy
            </Link>
            <Separator
              orientation="vertical"
              className="h-4! my-auto bg-muted/20"
            />
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Separator
              orientation="vertical"
              className="h-4! my-auto bg-muted/20"
            />
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
