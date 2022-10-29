import {RouteParamsBookList} from '@modules/BookList/types';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      search: undefined;
      booklist: RouteParamsBookList;
      details: undefined;
    }
  }
}
