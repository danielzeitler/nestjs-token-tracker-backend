import {
  IsArray,
  IsObject,
  IsString,
} from 'class-validator';

enum Item {
  TSHIRT = 'TSHIRT',
  SOCKS = 'SOCKS',
}

type IGift = {
  itemType?: Item;
  size: string;
};

type INFT = {
  nfts: [];
};

export class UserDto {
  @IsString()
  email: string;

  @IsString()
  name: string;

  @IsObject()
  gifts: IGift;

  @IsArray()
  nfts: INFT;
}
