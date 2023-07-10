import "../styles/_product.scss";

function Cost({
  currency,
  price,
  salePrice,
}: {
  currency: string;
  price: number;
  salePrice?: number;
}) {
  return (
    <div className="product-cost">
      <h4 className={`${salePrice && "product-cost-disabled"}`}>
        {currency}
        {price}
      </h4>
      {salePrice && (
        <h4>
          {currency}
          {salePrice}
        </h4>
      )}
    </div>
  );
}

export default Cost;
