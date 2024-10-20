import classNames from "classnames";
import PropTypes from "prop-types";

export const Button = ({ children, onClick, variant, size, className }) => {
  const classes = classNames(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold transition-all focus:outline-none capitalize",
    {
      "px-4 py-2 text-sm": size === "sm",
      "px-6 py-3 text-md": size === "md",
      "px-8 py-4 text-lg": size === "lg",
      "bg-teal-400 text-slate-800 hover:bg-teal-500":
        variant === "primary",
      "bg-slate-100 text-slate-900 hover:bg-slate-100/80":
        variant === "secondary",
      "border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-800":
        variant === "outline",
      "rounded-none border-b-2 hover:border-teal-400 hover:text-teal-400":
        variant === "underline",
    },
    className
  );

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary", "outline", "underline"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  className: PropTypes.string,
};
