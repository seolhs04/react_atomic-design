import { FlexBox, Image, Text } from "../../atoms";

import * as S from "./style";

export default function IntroTable() {
  return (
    <S.Table>
      <FlexBox>
        <div>
          <Image src="/images/table_img1.jpeg" width="3rem" />
          <S.TableCell>
            <Text innerText="보안" bold={true} margin="0.5em 0" />
            <Text innerText="철저한 24시간 보안, 모션 감지 카메라 및 알람" />
          </S.TableCell>
          <Image src="/images/table_img2.jpeg" width="3rem" />
          <S.TableCell>
            <Text innerText="화재 방지" bold={true} margin="0.5em 0" />
            <Text innerText="자동 스프링클러, 화재 경보기 및 소방 호스 설치" />
          </S.TableCell>
          <Image src="/images/table_img3.jpeg" width="3rem" />
          <S.TableCell>
            <Text innerText="실내환경 조절" bold={true} margin="0.5em 0" />
            <Text innerText="온도 및 습도 제어 관리" />
          </S.TableCell>
        </div>
        <div>
          <Image src="/images/table_img4.jpeg" width="3rem" />
          <S.TableCell>
            <Text innerText="무료 보험" bold={true} margin="0.5em 0" />
            <Text innerText="보관된 모든 물품에 대한 무료 보험 보장" />
          </S.TableCell>
          <Image src="/images/table_img5.jpeg" width="3rem" />
          <S.TableCell>
            <Text innerText="오픈 플랜식 시설" bold={true} margin="0.5em 0" />
            <Text innerText="파티션이 없어 공간 활용이 자유로운 보관시설" />
          </S.TableCell>
          <Image src="/images/table_img6.jpeg" width="3rem" />
          <S.TableCell>
            <Text innerText="제한된 접근" bold={true} margin="0.5em 0" />
            <Text innerText="인가된 BOXFUL 직원만 출입 가능한 물건 보관 창고" />
          </S.TableCell>
        </div>
      </FlexBox>
    </S.Table>
  );
}
