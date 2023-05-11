
/* 상품 목록을 받아오기 위한 api 함수 */
// const fetchProducts = (): Promise<Product[]> => {

  // } 
  
  // interface ProductDetail {
    //   id: number;
    //   name: string;
    //   price: number;
    // }
    
/* 특정 상품의 상세 정보 Pick */
interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

type shoppingItem = Pick<Product, 'id' | 'name' | 'price'>

const displayProductDetail = (shoppingItem: Pick<Product, 'id' | 'name' | 'price'>) => {
  id: 12;
  name: 'fds';
  price: 212; 
}

/* Omit */
interface AddressBook {
  name: string;
  phone: number;
  address: string;
  company: string;
}

const phoneBook: Omit<AddressBook, 'address'> = {
  name: 'juwon',
  phone: 121212121,
  company: 'my room'
};

const Eat: Omit<AddressBook, 'name' | 'phone'> = {
  address: '21212',
  company: '21212',
};

type UpDateProduct = Partial<Product>

/* 특정 상품 정보 업데이트, 갱신 */
const UpdateProductItem = (productItem: Partial<Product>) => {

}

/* 유틸리티 타입 구현하기 - Partial */
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// interface UserProfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }

type UserProfileUpdate = {
  username?: UserProfile['username'];
  email?: UserProfile['email'];
  profilePhotoUrl?: UserProfile['profilePhotoUrl'];
}
//----------------------------------------
type UserProfileUpdate = {
  /* 반복문 */
  [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]
}