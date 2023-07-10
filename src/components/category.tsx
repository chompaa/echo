function Category({
  type,
  enabled,
  onChange,
}: {
  type: string;
  enabled: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label className="category">
      <h4>{type}</h4>
      <input id={type} type="checkbox" checked={enabled} onChange={onChange} />
    </label>
  );
}

export default Category;
