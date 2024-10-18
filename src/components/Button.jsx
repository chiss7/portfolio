import classNames from "classnames";
import PropTypes from "prop-types";

export const Button = ({ children, onClick, variant, size }) => {
  const classes = classNames(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold transition-all focus:outline-none",
    {
      "px-4 py-2 text-sm": size === "sm",
      "px-6 py-3 text-md": size === "md",
      "px-8 py-4 text-lg": size === "lg",
      "bg-zinc-800 text-white hover:bg-zinc-800/80": variant === "primary",
      "bg-slate-100 text-slate-900 hover:bg-slate-100/80":
        variant === "secondary",
      "border border-slate-200 hover:bg-slate-100 hover:text-slate-900":
        variant === "outline",
    }
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
  variant: PropTypes.oneOf(["primary", "secondary", "outline"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
