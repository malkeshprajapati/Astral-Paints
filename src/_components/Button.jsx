function Button({
    url = "#",
    target = "_self",
    text = "Read More",
    extraCss = "",
}) {
    return (
        <a
            href={url}
            target={target}
            className={`px-6 py-3 rounded-full bg-white text-sm font-semibold ${extraCss}`}
        >
            {text}
        </a>
    );
}

export default Button;
