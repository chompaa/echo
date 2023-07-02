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
    <div className="category">
      <h4>{type}</h4>
      <input type="checkbox" checked={enabled} onChange={onChange} />
    </div>
  );
}

export default Category;
