import { EyeOffIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Separator } from "../../components/ui/separator";

const socialButtons = [
  {
    icon: "/google-symbol-1.svg",
    text: "Inscrivez-vous avec Google",
    alt: "Google symbol",
  },
  {
    icon: "/facebook-1.svg",
    text: "Inscrivez-vous avec Facebook",
    alt: "Facebook",
  },
];

const formFields = [
  {
    label: "Nom",
    placeholder: "Entrez votre nom",
    type: "text",
  },
  {
    label: "Prénoms",
    placeholder: "Entrez vos prénoms",
    type: "text",
  },
  {
    label: "Adresse email",
    placeholder: "Entrez votre adresse email",
    type: "email",
  },
  {
    label: "Mot de passe",
    placeholder: "Entrez votre mot de passe",
    type: "password",
  },
  {
    label: "Confirmez le mot de passe",
    placeholder: "Confirmez votre mot de passe",
    type: "password",
  },
];

const paginationDots = [{ active: false }, { active: true }, { active: false }];

export const Register = (): JSX.Element => {
  return (
    <div className="bg-white grid justify-items-center [align-items:start] w-screen">
      <div className="bg-main-colorsbackground-white w-[1440px] h-[990px] relative">
        <div className="absolute w-[739px] h-[990px] top-0 left-0">
          <div className="absolute w-[739px] h-[918px] top-[72px] left-0 bg-additional-colorsdark-smooth" />

          <div className="absolute w-[739px] h-[990px] top-0 left-0 bg-[#7b61ff]">
            <div className="inline-flex flex-col items-start justify-center gap-8 absolute top-[88px] left-[125px]">
              <div className="inline-flex flex-col items-start justify-center gap-3 relative flex-[0_0_auto]">
                <h1 className="relative w-[431px] mt-[-1.00px] font-heading-h5-bold font-[number:var(--heading-h5-bold-font-weight)] text-grayscalegrayscale-10 text-[length:var(--heading-h5-bold-font-size)] tracking-[var(--heading-h5-bold-letter-spacing)] leading-[var(--heading-h5-bold-line-height)] [font-style:var(--heading-h5-bold-font-style)]">
                  Offres à une visualisation libre de haute qualité
                </h1>

                <p className="relative w-[380px] font-medium-medium font-[number:var(--medium-medium-font-weight)] text-grayscalegrayscale-30 text-[length:var(--medium-medium-font-size)] tracking-[var(--medium-medium-letter-spacing)] leading-[var(--medium-medium-line-height)] [font-style:var(--medium-medium-font-style)]">
                  Hipster ipsum tattooed brunch I&#39;m baby. Chips truck yolo
                  paleo photo cred. I&#39;m knausgaard crucifix pin meditation
                  kale occupy knausgaard biodiesel. Heirloom carry yuccie occupy
                  raw.
                </p>
              </div>

              <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
                {paginationDots.map((dot, index) => (
                  <div
                    key={index}
                    className={`relative ${dot.active ? "w-6 h-2" : "w-2 h-2"} bg-grayscalegrayscale-10 rounded-[100px] ${!dot.active ? "opacity-40" : ""}`}
                  />
                ))}
              </div>
            </div>

            <img
              className="absolute w-[682px] h-[658px] top-[332px] left-[57px]"
              alt="Group"
              src="/group-1000000753.png"
            />
          </div>
        </div>

        <div className="absolute w-[503px] h-[842px] top-8 left-[819px]">
          <div className="inline-flex flex-col items-center gap-8 absolute top-[106px] left-0">
            <h2 className="relative w-[312px] mt-[-1.00px] font-heading-h5-bold font-[number:var(--heading-h5-bold-font-weight)] text-grayscalegrayscale-100 text-[length:var(--heading-h5-bold-font-size)] text-center tracking-[var(--heading-h5-bold-letter-spacing)] leading-[var(--heading-h5-bold-line-height)] [font-style:var(--heading-h5-bold-font-style)]">
              Inscription
            </h2>

            <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
                {socialButtons.map((button, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="flex-col gap-2.5 px-[119px] py-3 flex-[0_0_auto] bg-grayscalegrayscale-10 rounded-[20px] flex w-[501px] items-center justify-center relative h-auto border-0"
                  >
                    <div className="relative w-[273px] h-6 ml-[-4.00px] mr-[-6.00px]">
                      <img
                        className="absolute w-6 h-6 top-0 left-0"
                        alt={button.alt}
                        src={button.icon}
                      />

                      <div className="left-10 absolute h-6 top-0 font-medium-semibold font-[number:var(--medium-semibold-font-weight)] text-grayscalegrayscale-100 text-[length:var(--medium-semibold-font-size)] tracking-[var(--medium-semibold-letter-spacing)] leading-[var(--medium-semibold-line-height)] whitespace-nowrap [font-style:var(--medium-semibold-font-style)]">
                        {button.text}
                      </div>
                    </div>
                  </Button>
                ))}

                <div className="relative w-[503px] h-[22px] mr-[-2.00px]">
                  <div className="absolute h-[22px] top-0 left-[166px] font-small-medium font-[number:var(--small-medium-font-weight)] text-grayscalegrayscale-70 text-[length:var(--small-medium-font-size)] tracking-[var(--small-medium-letter-spacing)] leading-[var(--small-medium-line-height)] whitespace-nowrap [font-style:var(--small-medium-font-style)]">
                    Ou inscrivez-vous avec
                  </div>

                  <Separator className="left-[367px] absolute w-[134px] h-px top-2.5" />
                  <Separator className="left-0 absolute w-[134px] h-px top-2.5" />
                </div>
              </div>

              <form className="inline-flex flex-col items-end justify-center gap-3 relative flex-[0_0_auto]">
                {formFields.map((field, index) => (
                  <div
                    key={index}
                    className="flex flex-col w-[501px] items-start gap-2 relative flex-[0_0_auto] rounded-lg"
                  >
                    <div className="inline-flex items-start relative flex-[0_0_auto]">
                      <Label className="relative w-fit mt-[-1.00px] font-small-medium font-[number:var(--small-medium-font-weight)] text-grayscalegrayscale-70 text-[length:var(--small-medium-font-size)] tracking-[var(--small-medium-letter-spacing)] leading-[var(--small-medium-line-height)] whitespace-nowrap [font-style:var(--small-medium-font-style)]">
                        {field.label}
                      </Label>
                    </div>

                    <div className="flex h-[52px] items-center px-4 py-0 relative self-stretch w-full bg-grayscalegrayscale-10 rounded-3xl border border-solid border-[#e8eaec]">
                      <Input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="flex items-start relative flex-1 grow border-0 bg-transparent p-0 font-small-medium font-[number:var(--small-medium-font-weight)] text-grayscalegrayscale-60 text-[length:var(--small-medium-font-size)] tracking-[var(--small-medium-letter-spacing)] leading-[var(--small-medium-line-height)] [font-style:var(--small-medium-font-style)] placeholder:text-grayscalegrayscale-60 focus-visible:ring-0 focus-visible:ring-offset-0"
                      />

                      {field.type === "password" && (
                        <EyeOffIcon className="relative w-[18px] h-[18px]" />
                      )}
                    </div>
                  </div>
                ))}
              </form>
            </div>

            <div className="inline-flex flex-col items-center justify-center gap-6 relative flex-[0_0_auto]">
              <div className="flex-[0_0_auto] flex w-[501px] items-center justify-center relative">
                <Button className="flex items-center justify-center px-8 py-4 relative flex-1 grow bg-[#7b61ff] rounded-3xl overflow-hidden h-auto hover:bg-[#6b51ef] border-0">
                  <div className="relative w-fit mt-[-1.00px] font-large-semibold font-[number:var(--large-semibold-font-weight)] text-grayscalegrayscale-10 text-[length:var(--large-semibold-font-size)] tracking-[var(--large-semibold-letter-spacing)] leading-[var(--large-semibold-line-height)] whitespace-nowrap [font-style:var(--large-semibold-font-style)]">
                    S'inscrire
                  </div>
                </Button>
              </div>

              <div className="flex-[0_0_auto] flex w-[501px] items-center justify-center relative">
                <Button
                  variant="ghost"
                  className="flex items-center justify-center relative flex-1 grow rounded-lg h-auto p-0"
                >
                  <div className="relative w-fit mt-[-1.00px] font-medium-semibold font-[number:var(--medium-semibold-font-weight)] text-grayscalegrayscale-60 text-[length:var(--medium-semibold-font-size)] tracking-[var(--medium-semibold-letter-spacing)] leading-[var(--medium-semibold-line-height)] whitespace-nowrap [font-style:var(--medium-semibold-font-style)]">
                    <span className="text-[#9ca4ab] tracking-[var(--medium-semibold-letter-spacing)] font-medium-semibold [font-style:var(--medium-semibold-font-style)] font-[number:var(--medium-semibold-font-weight)] leading-[var(--medium-semibold-line-height)] text-[length:var(--medium-semibold-font-size)]">
                      Vous avez déjà un compte?{" "}
                    </span>

                    <span className="text-[#7b61ff] tracking-[var(--medium-semibold-letter-spacing)] font-medium-semibold [font-style:var(--medium-semibold-font-style)] font-[number:var(--medium-semibold-font-weight)] leading-[var(--medium-semibold-line-height)] text-[length:var(--medium-semibold-font-size)]">
                      Se connecter
                    </span>
                  </div>
                </Button>
              </div>
            </div>
          </div>

          <header className="absolute top-0 left-[184px] font-xtra-large-bold font-[number:var(--xtra-large-bold-font-weight)] text-grayscalegrayscale-100 text-[length:var(--xtra-large-bold-font-size)] tracking-[var(--xtra-large-bold-letter-spacing)] leading-[var(--xtra-large-bold-line-height)] whitespace-nowrap [font-style:var(--xtra-large-bold-font-style)]">
            Cartoon.com
          </header>
        </div>
      </div>
    </div>
  );
};