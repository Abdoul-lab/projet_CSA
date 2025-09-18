// import React from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

export const ForgotPassword = (): JSX.Element => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md px-8">
        <div className="text-center mb-12">
          <header className="font-xtra-large-bold font-[number:var(--xtra-large-bold-font-weight)] text-grayscalegrayscale-100 text-[length:var(--xtra-large-bold-font-size)] tracking-[var(--xtra-large-bold-letter-spacing)] leading-[var(--xtra-large-bold-line-height)] [font-style:var(--xtra-large-bold-font-style)] mb-16">
            Cartoon.com
          </header>
          
          <h1 className="font-heading-h5-bold font-[number:var(--heading-h5-bold-font-weight)] text-grayscalegrayscale-100 text-[length:var(--heading-h5-bold-font-size)] tracking-[var(--heading-h5-bold-letter-spacing)] leading-[var(--heading-h5-bold-line-height)] [font-style:var(--heading-h5-bold-font-style)] mb-3">
            Réinitialiser le mot de passe
          </h1>
          
          <p className="font-medium-medium font-[number:var(--medium-medium-font-weight)] text-grayscalegrayscale-60 text-[length:var(--medium-medium-font-size)] tracking-[var(--medium-medium-letter-spacing)] leading-[var(--medium-medium-line-height)] [font-style:var(--medium-medium-font-style)]">
            Récupérez le mot de passe de votre compte
          </p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <Label className="font-small-medium font-[number:var(--small-medium-font-weight)] text-grayscalegrayscale-70 text-[length:var(--small-medium-font-size)] tracking-[var(--small-medium-letter-spacing)] leading-[var(--small-medium-line-height)] [font-style:var(--small-medium-font-style)]">
              Adresse email
            </Label>
            
            <div className="flex h-[52px] items-center px-4 py-0 bg-grayscalegrayscale-10 rounded-3xl border border-solid border-[#e8eaec]">
              <Input
                type="email"
                placeholder="Entrez email adresse"
                className="flex items-start flex-1 border-0 bg-transparent p-0 font-small-medium font-[number:var(--small-medium-font-weight)] text-grayscalegrayscale-60 text-[length:var(--small-medium-font-size)] tracking-[var(--small-medium-letter-spacing)] leading-[var(--small-medium-line-height)] [font-style:var(--small-medium-font-style)] placeholder:text-grayscalegrayscale-60 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>

          <Button className="w-full flex items-center justify-center px-8 py-4 bg-[#7b61ff] rounded-3xl h-auto hover:bg-[#6b51ef] border-0">
            <span className="font-large-semibold font-[number:var(--large-semibold-font-weight)] text-grayscalegrayscale-10 text-[length:var(--large-semibold-font-size)] tracking-[var(--large-semibold-letter-spacing)] leading-[var(--large-semibold-line-height)] [font-style:var(--large-semibold-font-style)]">
              Continuer
            </span>
          </Button>
        </form>
      </div>
    </div>
  );
};