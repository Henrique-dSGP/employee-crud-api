export default class JobRole{

    _id: string = '';
    name: string = '';
    min_wage: number = 0;
    max_wage: number = 0;
    min_w_exp: string = '';

    get Name(): string{
        return this.name;
    }
    set Name(name: string) {
        this.name = name
    }

}