export default function TabButton({ children, onSelect, isSelected }) {
  console.log("TABBUTTON COMPONENT EXECUTING");
  //the button has active class if its selected and no class if its not selected
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
