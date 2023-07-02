import MoonLogoTee from "./images/moon-logo-tee.jpg";
import MoonWindCheaterJacket from "./images/moon-wind-cheater-jacket.jpg";
import MoonBoulderingChalkBag from "./images/moon-bouldering-chalk-bag.jpg";
import MoonWarriorCrashPad from "./images/moon-warrior-crash-pad.jpg";

export type ProductDepartment = {
  [department: string]: string;
};

export type ProductType = {
  [department: string]: {
    [type: string]: string;
  };
};

export type ProductList = {
  [department: string]: ProductData[];
};

export type ProductData = {
  id: number;
  department: string;
  type: string;
  name: string;
  image: string;
  price: number;
  description: string;
};

export const getProduct = (id: string): ProductData | undefined => {
  const _id = parseInt(id);

  let _product;

  Object.values(Data).find((products) =>
    products.find((product) => {
      if (product.id === _id) {
        _product = product;
        return true;
      }
    })
  );

  return _product;
};

export const getProducts = (department?: string) => {
  if (department) {
    return { types: Type, data: Data[department] };
  }

  return { types: Type, data: Data };
};

export const Department: ProductDepartment = {
  CLOTHING: "Clothing",
  EQUIPMENT: "Equipment",
};

export const Type: ProductType = {
  [Department.CLOTHING]: {
    TEE: "Tee",
    JACKET: "Jacket",
  },
  [Department.EQUIPMENT]: {
    CHALK_BAG: "Chalk Bag",
    CRASH_PAD: "Crash Pad",
  },
};

const Data: ProductList = {
  [Department.CLOTHING]: [
    {
      id: 1,
      department: Department.CLOTHING,
      type: Type[Department.CLOTHING].TEE,
      name: "Moon Logo Tee",
      image: MoonLogoTee,
      price: 49.99,
      description:
        "Train hard, climb harder. The classic Moon Logo tee in 100% organic cotton is perfect for \
        training during your next session. For climbers looking to push their limits.",
    },
    {
      id: 2,
      department: Department.CLOTHING,
      type: Type[Department.CLOTHING].JACKET,
      name: "Moon Wind Cheater Jacket",
      image: MoonWindCheaterJacket,
      price: 89.99,
      description:
        "Highly wind resistant, showerproof, and super lightweight for easy storage, the \
        Wind Cheater Jacket is an essential for every outdoor rock enthusiast.",
    },
  ],
  [Department.EQUIPMENT]: [
    {
      id: 3,
      department: Department.EQUIPMENT,
      type: Type[Department.EQUIPMENT].CHALK_BAG,
      name: "Moon Chalk Bag",
      image: MoonBoulderingChalkBag,
      price: 19.99,
      description:
        "Legitimately good no-spill sport climbing chalk bag. Ideal for dipping in on a sport climb",
    },
    {
      id: 4,
      department: Department.EQUIPMENT,
      type: Type[Department.EQUIPMENT].CRASH_PAD,
      name: "Moon Warrior Crash Pad",
      image: MoonWarriorCrashPad,
      price: 399.99,
      description:
        "If you buy just one bouldering crash pad in your lifetime, the Warrior Crash \
      Pad should be it. An industry-wide favourite used by many world-class boulderers, this pad \
      features a famous comfortable carry system, a goldilocks-perfect density of foam and an \
      ultra-durable 600D recycled ripstop polyester outer shell. Less awkward carrying, more \
      climbing.",
    },
  ],
};
