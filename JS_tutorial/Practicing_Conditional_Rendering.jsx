function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && "✅"} //isPacked가 참(true)으로 평가되면, '✅'를 반환
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>My packing List</h1>
      <ul>
        <Item isPacked={true} name="space suit" />
        <Item isPacked={false} name="Photo of Me" />
      </ul>
    </section>
  );
}
