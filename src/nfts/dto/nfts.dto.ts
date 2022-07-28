import {
  IsNumber,
  IsString,
} from 'class-validator';

export class NFTDto {
  @IsString()
  nft: string;

  @IsString()
  userId: string;
}
