import { forwardRef } from "react";

const Button = forwardRef(function Button(
  {
    children,
    as = "button",
    variant = "primary", // primary, secondary, outline, ghost, glow
    size = "md",         // sm, md, lg
    className = "",
    icon: Icon,
    iconPosition = "right",
    href,
    target,
    rel,
    download,
    onClick,
    type = "button",
    disabled = false,
    ...props
  },
  ref
) {
  const baseClasses = `btn btn-${variant} btn-${size} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="btn-icon btn-icon-left" size={18} />}
      <span className="btn-text">{children}</span>
      {Icon && iconPosition === "right" && <Icon className="btn-icon btn-icon-right" size={18} />}
    </>
  );

  if (as === "a" || href) {
    return (
      <a
        ref={ref}
        href={href}
        className={baseClasses}
        target={target}
        rel={target === "_blank" ? (rel || "noopener noreferrer") : rel}
        download={download}
        onClick={onClick}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      className={baseClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
});

export default Button;
