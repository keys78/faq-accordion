import './Accordion.css';
import React, { useState } from 'react';

const Accordion = ({ faqs }) => {
    const [activeIndex, setActiveIndex] = useState(1);

    const onQuestionClick = (index) => {
        setActiveIndex(index);
    };

    const renderedFaqs = faqs.map((faq, index) => {
        const active = index === activeIndex ? 'active' : '';

        return (
            <div
                onClick={() => onQuestionClick(index)}
                className={`faq__item ${active}`}
                key={faq.question}
            >
                <div className="faq__question-container">
                    <h2 className="faq__question">{faq.question}</h2>
                    <svg className="faq__arrow" width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 .799l4 4 4-4" stroke="#F47B56" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                </div>
                <p className="faq__answer">{faq.answer}</p>
            </div>
        );
    });

    return (
        <div className="faq__content">
            <h1 className="faq__heading">FAQ</h1>
            <div className="faq__items">
                {renderedFaqs}
            </div>
        </div>
    );
};

export default Accordion;