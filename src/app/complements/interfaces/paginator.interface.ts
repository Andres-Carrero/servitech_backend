export interface PaginationOptionsInterface {

    filter: {
        limits: number;
        pages: number;
        orden: any;
        column: string;
        status: string
        search: string
        dateStart: string
        dateEnd: string
      //columns: string
    }
  }