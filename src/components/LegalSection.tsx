import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface LegalItem {
  title: string;
  content: string;
}

interface LegalSectionProps {
  items: LegalItem[];
}

const LegalSection = ({ items }: LegalSectionProps) => {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
          <AccordionItem
            value={`item-${index}`}
            className="glass-panel rounded-lg px-6 border-border/50 overflow-hidden group hover:border-cyan-500/30 smooth-transition"
          >
            <AccordionTrigger className="text-lg font-semibold py-6 hover:no-underline group-hover:text-cyan-400 smooth-transition">
              <span className="flex items-center gap-3">
                <span className="text-cyan-500 text-2xl">{index + 1}.</span>
                {item.title}
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-6 pt-2">
              <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {item.content.split(/(@[\w.]+|https?:\/\/[\w./-]+)/g).map((part, i) => {
                  if (part.startsWith('@') || part.startsWith('http')) {
                    const isEmail = part.includes('@') && !part.startsWith('http');
                    const href = isEmail ? `mailto:${part}` : part;
                    return (
                      <a
                        key={i}
                        href={href}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors underline decoration-cyan-400/30 hover:decoration-cyan-300"
                        target={isEmail ? undefined : "_blank"}
                        rel={isEmail ? undefined : "noopener noreferrer"}
                      >
                        {part}
                      </a>
                    );
                  }
                  return part;
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
        </div>
      ))}
    </Accordion>
  );
};

export default LegalSection;
