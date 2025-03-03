export interface SimpleBlogCard {
    alt: string;
    _id: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    titleImage: any;
    title:string;
    smallDescription:string;
    currentSlug:string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image:any;
    
  
     
    }
  
    export interface fullBlog{
      currentSlug:string;
      title:string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      content:any;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      image:any;
    }