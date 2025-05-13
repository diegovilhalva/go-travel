import Service from "./Service"
import { type Service as IService } from "../../utils/contentTypes";
import { services } from "../../utils/content";
const customazedPackages:IService = services.at(0)!;
const culinaryTours:IService = services.at(1)!;
const destinationExprestise: IService = services.at(2)!;


const Services = () => {
    return (
        <section className="bg-primary-100 px-24 py-36">
            <ul className="border-grey-500/40 m-auto flex max-w-389 justify-between border-y-1 py-24">
                <Service service={customazedPackages} />
                <li className="bg-grey-500/40 block w-0.25 self-stretch" aria-label="a grey divider" />
                <Service service={culinaryTours} />
                 <li className="bg-grey-500/40 block w-0.25 self-stretch" aria-label="a grey divider" />
                <Service service={destinationExprestise} />
            </ul>
        </section>
    )
}

export default Services