export default function TabButton({ children, isSelected, ...props }) {
  console.log("TABBUTTON COMPONENT EXECUTING");
  return (
    <button className={isSelected ? "active" : undefined} {...props}>
      {children}
    </button>
  );
}
