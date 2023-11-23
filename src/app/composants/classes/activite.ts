export class Activite {
    constructor(
        public id:number,
        public titre:string,
        public image:string,
        public date:string,
        categorie:string,
        public infos:{
             lieu:string,
             temps:number,
             
        }
        ) {}
}
