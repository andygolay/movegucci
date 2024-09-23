"use client";

import { useState } from "react";
import { Actions, PetAction } from "./Actions";
import { PetDetails } from "./Details";
import { PetImage } from "./Image";
import { Summary } from "./Summary";
import { AptogotchiCollection } from "@/components/AptogotchiCollection";
import { usePet } from "@/context/PetContext";

export interface Pet {
  name: string;
  birthday: number;
  energy_points: number;
  parts: PetParts;
}

export interface PetParts {
  background: number,
  body: number;
  mouth: number;
  tusk: number;
  eye: number;
  glasses: number;
  hair: number;
}

export const DEFAULT_PET = {
  name: "Unknown",
  energy_points: 0,
  parts: {
    background: 0,
    body: 0,
    mouth: 0,
    tusk: 0,
    eye: 0,
    glasses: 0,
    hair: 0
  },
};

export function Pet() {
  const { pet, setPet } = usePet();

  const [selectedAction, setSelectedAction] = useState<PetAction>("play");

  return (
    <div className="flex flex-col self-center m-2 sm:m-10">
      <div className="flex flex-col sm:flex-row self-center gap-4 sm:gap-12">
        <div className="flex flex-col gap-2 sm:gap-4 sm:w-[360px] m-auto">
          <PetImage
            selectedAction={selectedAction}
            petParts={pet?.parts}
            avatarStyle
          />
          <PetDetails />
        </div>
        <div className="flex flex-col gap-2 sm:gap-8 sm:w-[680px] h-full">
          <Actions
            selectedAction={selectedAction}
            setSelectedAction={setSelectedAction}
          />
          <Summary />
        </div>
      </div>
      <AptogotchiCollection />
    </div>
  );
}
