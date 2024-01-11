/**
 * @param {"primary" | "secondary" | "danger"} variant
 * @returns {JSX.Element}
 */
export function ButtonComponent({ variant, ...props }) {
  const newProps = {
    ...props,
    className: `${variant}`
  }
  if (props.href) {
    return <a {...newProps} />
  }
  return <button {...newProps} />
}
