import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
    text: string;
    image: string;
    name: string;
    role: string;
}

export const TestimonialsColumn = (props: {
    className?: string;
    testimonials: Testimonial[];
    duration?: number;
}) => {
    return (
        <div className={props.className}>
            <motion.div
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    duration: props.duration || 10,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6"
            >
                {[
                    ...new Array(2).fill(0).map((_, index) => (
                        <React.Fragment key={index}>
                            {props.testimonials.map(({ text, image, name, role }, i) => (
                                <div
                                    className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm max-w-xs w-full shadow-lg shadow-black/20"
                                    key={i}
                                >
                                    <p className="text-muted-foreground leading-relaxed">{text}</p>
                                    <div className="flex items-center gap-3 mt-6">
                                        <img
                                            width={40}
                                            height={40}
                                            src={image || "/placeholder.svg"}
                                            alt={name}
                                            className="h-10 w-10 rounded-full object-cover ring-2 ring-white/20"
                                        />
                                        <div className="flex flex-col">
                                            <span className="font-medium text-foreground tracking-tight leading-5">{name}</span>
                                            <span className="text-sm text-muted-foreground leading-5">{role}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </React.Fragment>
                    )),
                ]}
            </motion.div>
        </div>
    );
};
