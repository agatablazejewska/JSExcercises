import { User } from "../User/User";
import {
    AccessLevels,
    UserConstructionData,
} from '../Utilities';

export class Admin extends User {
    constructor(data: UserConstructionData) {
        super(data);

        this.accessLevel = AccessLevels.Admin;
    }
}