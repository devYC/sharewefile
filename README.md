# :small_blue_diamond: Share We?

<br/>

![MAIN PAGE](https://github.com/devYC/sharewefile/assets/149979446/fd4ecbfc-bd56-4cc3-9b4c-4d577ca93702)

:small_blue_diamond: Share We는 동일한 WIFI를 사용하는 유저간 파일을 전송 및 공유할 수 있는 웹 :computer: 어플리케이션입니다.

:small_blue_diamond: 아이디나 비밀번호 없이 URL을 통해 파일을 보낼 수 있습니다. 기기가 달라도 가능한 브라우저를 사용한다면 파일 공유가 가능합니다.
<br>
<br>

:signal_strength: [빠른 파일 공유가 필요할땐, share we? (클릭 시 사이트로 이동합니다)](http://sharewefile.com)

:warning: 지원 가능한 브라우저 : 파이어폭스, 엣지, 크롬, 사파리, 오페라
<br>

<img width="50" height="50" alt="Firefox" src="https://github.com/devYC/sharewefile/assets/149979446/f175584b-756d-4461-a214-d3c4964d453b">
<img width="50" height="50" alt="Edge" src="https://github.com/devYC/sharewefile/assets/149979446/a39d8f8a-9b0a-4e4a-9b5e-5a1e1cf1eaf0">
<img width="50" height="50" alt="Chrome" src="https://github.com/devYC/sharewefile/assets/149979446/1bdc75bc-46a1-4497-b596-2ebe5c4b5c22">
<img width="50" height="50" alt="Safari" src="https://github.com/devYC/sharewefile/assets/149979446/1d9a8124-27b9-4cdd-a6b4-159c690667aa">
<img width="50" height="50" alt="Opera" src="https://github.com/devYC/sharewefile/assets/149979446/fcf56b16-98e2-434a-b253-0c8fe85baf6d">

<br>
<br>

# :small_blue_diamond: Table of Contents

- [Preview](#Preview)
- [Motivation](#Motivation)
- [Feature](#Feature)
- [Challenges](#Challenges)
- [1. 서버를 사용하지 않고 사용자간 직접 네트워크를 형성 하려면 어떻게 해야할까?](##1.서버를사용하지않고사용자간직접네트워크를형성하려면어떻게해야할까?)
  - [1-1. 네트워크와 프로토콜](##1-1.네트워크와프로토콜)
  - [1-2. 서비스에 적합한 어플리케이션 계층의 네트워크 방식은?](##1-2.프로젝트에적합한어플리케이션계층의네트워크방식은?)
- [2. P2P 네트워크 형식을 따르는 어플리케이션은 어떤 전송 방식을 따를까?](##2.p2p네트워크형식을따르는어플리케이션은어떤전송방식을따를까?)
  - [2-1. TCP vs UDP](##2-1.TCPvsUDP)
  - [2-2. UDP/TCP 전송 방식을 따르는 실시간 소통 프로토콜 종류](##2-2.UDP/TCP전송방식을따르는실시간소통프로토콜종류)
- [3. webRTC란?](##3.webRTC란?)
  - [3-1. webRTC의 프로토콜 및 원리](##3-1.webRTC의프로토콜및원리)
  - [3-2. WebRTC vs PeerJS 라이브러리 사용 할 것인가?](##3-2.WebRTCvsPeerJS라이브러리사용을할것인가?)
  - [3-3. webRTC를 활용한 Peer간 연결](##3-3.webRTC를활용한Peer간연결)
- [4. 사용자 경험 측면에서 UI / UX 고려](##4.사용자경험측면에서UI/UX고려)
  - [4-1. User friendly 기능](##4-1.Userfriendly기능)
  - [4-2. 모바일 인 앱 브라우저 유저를 고려한 반응형 사이트](##4-2.모바일인앱브라우저유저를고려한반응형사이트)
- [5. 사이트 성능 최적화](#5.사이트성능최적화)
  - [5-1. 로딩 성능 최적화 - SVG 파일](##5-1.로딩성능최적화-SVG파일)
  - [5-2. 코드 실행 성능 최적화 - 코드 리팩토링](##5-2.코드실행성능최적화-코드리팩토링)
- [Repository Link](#RepositoryLink)
- [Timeline](#Timeline)

<br>

# :small_blue_diamond: Preview

https://github.com/devYC/sharewefile/assets/149979446/ed6d9d3c-cf17-4498-8eb1-177241ac832f

<br>

# :small_blue_diamond: Motivation

가끔 간단하게 빨리 공유하고 싶은 파일이나 사진이 있는데, 공유할 상대는 구글, 카카오톡과 같은 클라우드 서버 접근이 가능한 아이디가 없는 경우가 있었습니다. 심지어 모바일 기기가 같지 않아서 간단한 공유가 어려웠습니다.

실생활에서 겪은 불편함을 해소하고 싶어서 기기에 구애받지 않고 로그인을 하지 않아도 되는 파일 공유 서비스를 구현하게 되었습니다.
<br>
<br>

# :small_blue_diamond: Feature

- 파일 공유를 하고자 하는 유저에게 전달할 URL 코드를 발급 받습니다.
- 상대방 유저가 발급받은 URL 코드를 브라우저 또는 인 앱 브라우저에 입력합니다.
- 상대방 유저가 사이트에 접속 후 Sender는 화면에 뜬 start 버튼을 클릭하면 서로 연결됩니다.
- 동일한 WIFI 내에 있는 유저가 아닐 경우 연결되지 않고 상대방 아이콘이 뜨지 않습니다.
- 보내고자 하는 이미지, 파일을 선택하면 파일의 이름과 사이즈를 보내기 전에 확인할 수 있습니다.
- 보내는 버튼을 선택해 상대방 유저에게 파일을 전달 합니다.
- 상대방 유저는 미리보기로 전달받은 파일을 살펴본 후 최종적으로 다운로드할지 결정할 수 있습니다.
- 두 유저는 파일을 공유하기 전단계에서 취소 할 수 있습니다.
- 파일이 전송되고 있을때는 화살표가 표시되어 전송이 끝나는 시점을 알 수 있습니다.
  <br>
  <br>

# :small_blue_diamond: Challenges

## 1. 서버를 사용하지 않고 사용자간 직접 네트워크를 형성 하려면 어떻게 해야할까?

## [1-1. 네트워크와 프로토콜](https://confusion-windshield-9c2.notion.site/Network-f71b65198a894caf8714c01afd40494d)(노션 페이지 참고)

- `Network`란 정보가 전송되는 경로를 말합니다. 이 경로는 어플리케이션, 전송, 인터넷, 링크, 물리 층으로 나뉘며 각 층별로 정보가 전송되는 규칙이 모두 다릅니다. 각 층별 네트워크 규칙을 `Protocol`이라고 지칭합니다.

- 상위 계층인 어플리케이션 계층의 네트워크는 `Client - Server` 방식과 `Peer to Peer(P2P)` 방식을 따릅니다.
  <br/>

<img width="481" alt="Screenshot 2024-02-11 at 11 10 11" src="https://github.com/devYC/sharewefile/assets/149979446/80bc2bb4-0745-4dcc-b29f-86747b169806">
<br/>
<br/>

| 차이점        | 클라이언트 - 서버 방식                     | P2P 방식                 |
| ------------- | ------------------------------------------ | ------------------------ |
| 구성          | 서버, 클라이언트                           | 노드                     |
| 목적          | 손실이 적은 정보의 공유                    | 연결성                   |
| 서버유무      | 서버 O                                     | 서버 X                   |
| 통신방식      | 1:1                                        | 1대1, 1대N, N대N         |
| handshake     | 3 way handshake 발생                       | 발생하지 않음            |
| 프로토콜 종류 | FTP, HTTP, TCP/IP 등                       | SCTP, BitTorrent, SIP 등 |
| 보안          | handshake를 통해 UDP 보다는 신뢰할 수 있음 | 상대적으로 보안에 취약   |
| SPOF          | 자주 발생함                                | 오류를 막을 수 있음      |

<br>
* SPOF란? Single Point of Failure의 약자로 한번의 실패로 전체 서비스가 중단되는 현상
<br>
* handshake란? 하나의 데이터를 보내기전 상대방과 연결 상태를 만들거나 해제하기 위한 과정
<br>
<br>

## 1-2. 서비스에 적합한 어플리케이션 계층의 네트워크 방식은?

- 서버에 따로 저장하지 않고 기기간 직접 전달
- 빠른 통신 속도
- 추후 확장성을 고려해`(N:N)` 통신이 가능한 방식
  <br>

| 카테고리 | 데이터 신뢰성 | 시간 | 처리율 | 보안 | 서버유무 | 통신방식 | 확장성 |
| -------- | ------------- | ---- | ------ | ---- | -------- | -------- | ------ |
| 우선순위 | 3             | 1    | 4      | 3    | 1        | 2        | 2      |

:white_check_mark: 우선순위와 프로젝트 동기에 따라서 `P2P` 형식의 어플리케이션을 만드는게 적합하다고 판단했습니다.
<br>
<br>

## 2. P2P 네트워크 형식을 따르는 어플리케이션은 어떤 전송 방식을 따를까?

## 2-1. [TCP](https://confusion-windshield-9c2.notion.site/TCP-c710cc2a4b794398bb81b6d95b30edcd?pvs=4) vs [UDP](https://confusion-windshield-9c2.notion.site/UDP-5f32a792fdba402194e98f1b59f8802d?pvs=4)(노션 페이지 참고)

- 어플리케이션의 전송은 어플리케이션 계층 바로 아래인 전송 계층`(Transport Layer)`에서 이뤄집니다.
  전송 계층은 송신자와 수신자를 연결하는 통신 서비스, 데이터 스트림, 신뢰성 보장, 흐름 제어 기능을 제공하여 애플리케이션과 인터넷 계층 사이의 데이터 중계 역할을 합니다. 대표적인 전송 프로토콜은 아래 두가지가 있습니다.
  <br>

|                 | `TCP` : Transmission Control Protocol (가상회선 패킷 교환 방식) | `UDP` : User Datagram Protocol (데이터그램 패킷 교환 방식) |
| --------------- | --------------------------------------------------------------- | ---------------------------------------------------------- |
| **패킷 순서**   | 보장                                                            | 보장 X                                                     |
| **연결**        | 연결 지향 프로토콜                                              | 비연결형 프로토콜                                          |
| **handshake**   | 3-way                                                           | X                                                          |
| **중계 방식**   | 1:1                                                             | 다중 사용                                                  |
| **데이터 관리** | 흐름, 혼잡, 수신, 오류 발생 제어                                | 제어해주지 않음                                            |

<br>

## 2-2. UDP/TCP 전송 방식을 따르는 실시간 소통 프로토콜 종류

|               | TCP/UDP | latency   | plugin    | 확장성 | 보안 | 특징                                                         |
| ------------- | ------- | --------- | --------- | ------ | ---- | ------------------------------------------------------------ |
| **RTMP**      | TCP     | 매우 낮음 | 필수      | 보통   | 보통 | HTML5에서 지원하지 않음 / 2012년부터 업데이트 되고 있지 않음 |
| **HLS**       | TCP     | 보통      | 필수 아님 | 낮음   | 보통 | Safari를 제외하고 지원하지 않음                              |
| **Websocket** | TCP     | 낮음      | 필수 아님 | 높음   | 높음 |
| **WebRTC**    | UDP     | 낮음      | 필수 아님 | 높음   | 높음 |

- RTMP : Real Time Messaging Protocol
- HLS : HTTP Live Streaming
  <br>

:white_check_mark: TCP는 패킷의 순서와 신뢰성에 중점을 두기에 보안은 괜찮을 수 있으나 속도가 느릴 수 있다고 판단하여 UDP 기반의 real time communication protocol인 WebRTC를 사용했습니다.
<br>
<br>

## 3. webRTC란?

## 3-1. webRTC의 프로토콜 및 원리

- [webRTC 원리](https://confusion-windshield-9c2.notion.site/WebRTC-97e694d6f240431ebd1703e4e985d5cd?pvs=4) (노션 페이지 참고)

## 3-2. WebRTC vs PeerJS 라이브러리 사용을 할 것인가?

- peerJS는 webRTC를 누구나 쉽게 사용할 수 있도록 만들어진 라이브러리 입니다.

| peerJS                                             | webRTC                                                                  |
| -------------------------------------------------- | ----------------------------------------------------------------------- |
| 라이브러리                                         | 브라우저 내장 API                                                       |
| 간단하게 로직을 작성하고 시스템을 동작시킬 수 있다 | 로직을 모두 구현해야해서 복잡하다. 하지만 원리를 제대로 이해할 수 있다. |
| TURN 서버 제공                                     | TURN 서버 미제공                                                        |
| peer connection을 간략하게 구현 해놓음             | peer connection 로직을 직접 구현해야 함                                 |
| signaling server (클라우드 제공)                   | signaling server 제공 하지 않음                                         |
| 지원하는 browser 리스트를 유틸리티로 제공          | 지원하는 browser 리스트를 개별적으로 만들어야 함                        |

:white_check_mark: peerJS는 `TURN 서버`, `signaling 서버`, `지원하는 브라우저 리스트`등 편의성 편리성을 제공합니다. 이미 webRTC의 동작 원리나 작동 원리를 알고 있는 사람들은 peer JS를 이용해서 쉽게 서비스 구현이 가능해 보입니다. 하지만 저는 단순히 서비스 구현에만 초점을 맞춘것이 아닌 추후 `확장성` 및 `디버깅`을 고려한 서비스 구현을 고민중이었습니다. 그래서 기본적인 작동 원리 및 흐름을 제대로 이해하고 싶어 `webRTC 브라우저 내장 API`로 서비스를 구현했습니다.
<br>
<br>

## 3-3. webRTC를 활용한 Peer간 연결

1. 시그널링 서버 구축
2. `createOffer()`를 통한 `SDP` 생성 + `setLocalDescription()`을 통해 Peer1 등록
3. 시그널링 서버를 통해 Peer1의 `SDP(offer)`를 Peer2로 전달
4. Peer2에서 Peer1의 `SDP`를 `setRemoteDescription()`으로 등록
5. `createAnswer()`를 통해 Peer2의 `SDP` 생성 + `setLocalDescription()`을 통해 Peer2 등록
6. 시그널링 서버를 통해 Peer2 `SDP(answer)`를 Peer1로 전달
7. Peer1에서 Peer2의 `SDP`를 `setRemoteDescription()`으로 등록
8. ICE의 TURN / STUN 서버를 통해 Peer1의 후보를 찾음
9. 시그널링 서버를 통해 Peer1 후보를 Peer2로 전달
10. Peer1 후보를 등록
11. ICE의 TURN / STUN 서버를 통해 Peer2의 후보를 찾음
12. Peer2 후보를 등록
13. 서로 후보로 등록된 후 Peer1, Peer2 기기간 직접 연결 구축

<br>
<br>

## 4. 사용자 경험 측면에서 UI / UX 고려

## 4-1. User friendly 기능

<img width="308" alt="Screenshot 2024-02-16 at 13 53 27" src="https://github.com/devYC/sharewefile/assets/149979446/e754fa29-7c5f-43c2-a82b-a29a31268d80"> <img width="312" alt="Screenshot 2024-02-16 at 13 53 35" src="https://github.com/devYC/sharewefile/assets/149979446/7036c4b0-2d0d-4000-9ade-a7295c0309c4">

- `Sender` 입장에서 파일을 잘못 선택할 가능성이 있어서 파일 선택 후 최종적으로 결정할 수 있는 모달, Yes, No, X 버튼의 **선택지 제공** 했습니다.

<img width="443" alt="Screenshot 2024-02-16 at 13 54 11" src="https://github.com/devYC/sharewefile/assets/149979446/616b51b4-4804-4876-8a13-1552be68d56f">

- `Receiver` 입장에서 단순히 파일 명, 파일 사이즈만 표기해줄 경우 파일을 파악하기 어려울 수 있어서 **Priview** 화면을 통해 대략적으로 어떤 파일을 받게 되는지 알 수 있게 했습니다.
  <br>
  <br>

## 4-2. 모바일 인 앱 브라우저 유저를 고려한 반응형 사이트

<img width="851" alt="Screenshot 2024-02-16 at 14 06 25" src="https://github.com/devYC/sharewefile/assets/149979446/f1ee3449-e933-4d4d-bf74-eed9762c6c35">

<br>

- Can I use 사이트에 따르면, webRTC를 사용할 수 브라우저 중 인 앱 브라우저의 사용율이 전 세계적으로 40%에 달할 정도로 높았습니다. 웹 어플리케이션 이지만, 모바일 인 앱 브라우저로 접속하는 유저들을 고려해 모바일, 태블릿 pc에 맞춘 `break point` 지정 및 `반응형` `component-styled`을 적용했습니다.
  <br>

```
const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 34%;
  top: 3%;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 1.4em;
  text-align: center;

  @media screen and (max-width: 320px) {
    width: 90vw;
    height: 40vh;
    left: 10vw;
    top: 9vh;
  }

  @media screen and (min-width: 321px) and (max-width: 639px) {
    width: 90vw;
    height: 34vh;
    left: 12%;
    top: 15%;
  }

  @media screen and (min-width: 640px) and (max-width: 1080px) {
    width: 70vw;
    height: 40vh;
    left: 25vw;
  }

  @media screen and (min-width: 1081px) {
    width: 50vw;
    height: 40vh;
    left: 30vw;
  }
`;
```

<br>
<br>

## 5. 사이트 성능 최적화

## 5-1. 로딩 성능 최적화 - SVG 파일

<img width="268" alt="Screenshot 2024-02-16 at 14 14 17" src="https://github.com/devYC/sharewefile/assets/149979446/4af12032-c770-4186-b66d-babf9403f3ab">

<br>
<br>

- 현재는 사용하는 이미지 수가 많지 않아서 webpack 번들링에 포함시키지 않고, 초기 로딩 시간을 빠르게 하기 위해 Public 폴더로 svg 파일을 옮겨서 배포했습니다.
  <br>
  <br>

## 5-2. 코드 실행 성능 최적화 - 코드 리팩토링

- RTC 연결에 필요한 세부 기능 로직을 하나로 합쳐 공통된 로직은 하나로 줄여 `중복성을 낮추고` receiverRTCconnection / senderRTCconnection 두개의 파일로 리팩토링 했습니다.

```
  useIceCandidateFinder(localConnection, socketOfSender, "sender ICE");
  useSetIceCandidate(localConnection, socketOfSender, "receiving receiver ICE");
  createOffer(localConnection, socketOfSender);
  setLocalDescription(localConnection, socketOfSender);
  showStateOfIceConnection(localConnection);
  showStateOfSignaling(localConnection);
```

- 많은 모달들이 있는데 generalModal인 공통 컴포넌트로 전환 후 `재 사용성` 및 `관리를 쉽게` 할 수 있게했습니다.

```
export default function GeneralModal({
  title,
  name,
  size,
  primaryAction,
  primaryButtonText,
  secondaryAction,
  secondaryButtonText,
  handleClose,
}) {
  return (
    <Wrapper>
      <Words>
        <Info>{title}</Info>
        <Border>
          <p>File name : {name}</p>
          <p>File size : {size} bytes</p>
        </Border>
        <Info>
          {primaryButtonText
            ? "Do you want to send it?"
            : "Would you like to download it?"}
        </Info>
      </Words>
      {primaryButtonText && (
        <PrimaryButton type="button" onClick={primaryAction}>
          {primaryButtonText}
        </PrimaryButton>
      )}
      {secondaryButtonText && (
        <SecondaryButton type="button" onClick={secondaryAction}>
          {secondaryButtonText}
        </SecondaryButton>
      )}
      <CloseButton type="button" onClick={handleClose}>
        X
      </CloseButton>
    </Wrapper>
  );
}

```

# :small_blue_diamond: Tech Stacks

<br>

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
<img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
<img src="https://img.shields.io/badge/socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white">
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
<img src="https://img.shields.io/badge/pm2-2B037A?style=for-the-badge&logo=pm2&logoColor=white">
<img src="https://img.shields.io/badge/amazonec2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white">
<img src="https://img.shields.io/badge/amazonroute53-8C4FFF?style=for-the-badge&logo=amazonroute53&logoColor=white">
<img src="https://img.shields.io/badge/amazons3-569A31?style=for-the-badge&logo=amazons3&logoColor=white">
<img src="https://img.shields.io/badge/githubactions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white">

<br>
<br>

# :small_blue_diamond: Repository Link

- [Share We Client](https://github.com/devYC/sharewefile)
- [Share We Server](https://github.com/devYC/sharewefile_server)
  <br>

# :small_blue_diamond: Timeline

프로젝트 기간 : 2023.04.08 ~ 2023.05.01

1주차 : 아이디어 수집, 기술 스택 선정, Figma를 사용한 Mockup 제작, Notion을 사용한 Kanban 작성

2~3주차 : 주요 기능 개발, 프론트엔드, 백엔드 구현
<br>

2023.05월 이후 ~ 현재 :
리팩토링, TURN 서버 구축, 반응형 적용, 배포
