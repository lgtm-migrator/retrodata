import { Model } from "../base";
import { College } from "../colleges";
import { Image } from "../images";

export interface Laboratory extends Model {
    name: string;
    name_en: string | null;
    slug: string;
    logo_id: number | null;
    logo?: Image | null;
    college_id: number;
    college?: College;
}
