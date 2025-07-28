import React from "react";
import { useAccordion } from "../../hooks/useAccordion";
import { motion, AnimatePresence } from "framer-motion";
import "./styles/FAQSection.css";
import { faqGroups } from "../../data/faq";

const FAQSection = () => {
  const { open, setOpen, toggle } = useAccordion();
  const [search, setSearch] = React.useState("");

  // Filtrage local des questions
  const filteredGroups = faqGroups
    .map((group) => ({
      ...group,
      faqs: group.faqs.filter((faq) =>
        faq.question.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((group) => group.faqs.length > 0);

  return (
    <motion.section
      id="faq"
      className="faq faqtech"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <h2 className="faqtitle">Questions fréquentes</h2>
      <div className="faqsearchbar-container">
        <input
          className="faqsearchbar"
          type="text"
          placeholder="Rechercher une question..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="faqgroups">
        {filteredGroups.length === 0 ? (
          <div className="faq-empty-message">
            Aucune question ne correspond à votre recherche.
          </div>
        ) : (
          filteredGroups.map((group, groupIdx) => (
            <div className="faqgroup" key={group.group}>
              <h3 className="faqgroup-title">{group.group}</h3>
              <div className="faqlist">
                {group.faqs.map((faq) => {
                  const realIdx = faqGroups[groupIdx].faqs.findIndex(
                    (f) => f.question === faq.question
                  );
                  return (
                    <div className="faqitem" key={faq.question}>
                      <button
                        className={`faqquestion${
                          open.group === groupIdx && open.idx === realIdx
                            ? " open"
                            : ""
                        }`}
                        onClick={() => toggle(groupIdx, realIdx)}
                        aria-expanded={
                          open.group === groupIdx && open.idx === realIdx
                        }
                        aria-controls={`faqpanel-${groupIdx}-${realIdx}`}
                        id={`faqtoggle-${groupIdx}-${realIdx}`}
                      >
                        {faq.question}
                        <span className="faqtoggle" aria-hidden="true">
                          {open.group === groupIdx && open.idx === realIdx
                            ? "−"
                            : "+"}
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {open.group === groupIdx && open.idx === realIdx && (
                          <motion.div
                            className="faqanswer open"
                            id={`faqpanel-${groupIdx}-${realIdx}`}
                            aria-labelledby={`faqtoggle-${groupIdx}-${realIdx}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="faqanswer-open"
                          >
                            {faq.answer}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </motion.section>
  );
};

export default FAQSection;
