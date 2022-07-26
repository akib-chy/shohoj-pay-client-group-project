import { Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import CardForm from "./CardForm";

const stripePromise = loadStripe(
  "pk_test_51L105BIxM8sRxo2mh9agH6bogilwho5NgGj1UqtzfXtlLoaBTG4ufhc31Kem5Og0H5bfx1cfv87lGEZTNgDWGTTR007hgLkB5x"
);

const AddMoney = () => {
  const [addAmount, setAddAmount] = useState();

  // console.log(addAmount);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="addMoneyContainer w-96">
        <h2 className="servicesHeader md:text-3xl text-2xl font-medium mb-12 text-center">
          Add Money
        </h2>
        <input
          className="h-12 p-2 w-full"
          type="number"
          onChange={(e) => {
            setAddAmount(e.target.value);
          }}
        />
        <br />
        <div className="max-w-sm mt-7 text-left">
          <Elements stripe={stripePromise}>
            <CardForm addAmount={addAmount} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default AddMoney;