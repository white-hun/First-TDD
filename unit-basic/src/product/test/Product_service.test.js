const ProductService = require("../product_service");
const StubProductClient = require("./stub_product_client");

describe("ProductService - Stub", () => {
  let productService;

  beforeEach(() => {
    productService = new ProductService(new StubProductClient());
  });

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "🥛", available: true }]);
  });
});

//----------------------------------------------------------------------
// Structure of test(TripleA, GWT)

const ProductService = require("../product_service");
const StubProductClient = require("./stub_product_client");

describe("ProductService - Stub", () => {
  let productService;

  // test가 수행되기 전 before(Each, All)나, 수행되고 난 후 after(Each, All)가 존재한다
  beforeEach(() => {
    productService = new ProductService(new StubProductClient());
  });

  it("should filter out only available items", async () => {
    // 준비 Arrange, Given - 준비 과정을 여러개에 걸쳐서 반복해서 사용하고 있다면, 재사용할 수 있도록 유틸리티 함수로 정의해서 사용
    const productService = new ProductService(new StubProductClient());

    // 실행 Act, When - 의도적으로 실패하기
    const items = await productService.fetchAvailableItems();

    // 검증 Assert, Then - 가장 마지막에 두기
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "🥛", available: true }]);
  });
});

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 1. 한 번 작성된 테스트 코드는 영원히 유지보수 해야 한다.
// 2. 내부 구현 사항을 테스트 X
// 3. 재사용성을 높이기(테스트 유틸리티)
// 4. 배포용 코드와 철저히 분리
// 5. 테스트코드를 통한 문서화

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 하나의 테스트 함수 안에서 검사하고 있는것이 많다면 여러개의 테스트로 분리하는 방법도 생각해보기

// 좋은 테스트의 원칙
// F(Fast) - test가 빠르게 수행되도록 만드는 것, 느린것에 대한 의존성 낮추기
//           (파일, DB, 네트워크 같은 것들에 대해 Mock과 Stub을 적절하게 사용하기)
// I(Isolated) - 최소한의 유닉으로 검증하기(독립적이고, 집중적으로 유지, 하나의 test에서 여러 개의 test를 수행하지 않기)
// R(Repeatable) - 실행할 때마다 동일한 결과를 유지(환경에 영향을 받지 않도록 작성)
// S(Self-Validating) - 스스로 결과를 검증하기
//                     (CI/CD와 같은 자동화 프로세스를 도입해서 리파지토리에 새로운 코드가 추가되면 모든 테스트가 다 실행되어서 기존에 영향을 주는지 실패한 코드는 없는지 검증할 수 잇도록 한다)
// T(Timely) - 시기적절하게 테스트 코드 작성(리펙토링을 하거나 사용자에게 배포되기 이전에 테스트 코드를 작성)

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 테스트의 범위(Right-BICEP) - 모든 요구 사항이 정상 동작 하는지 확인(모든 결과가 정확한지 확인)

// B(Boundary conditions) - 모든 코너 케이스에 대해 테스트를 하기( ex)잘못된 포맷의 인풋, null, 특수문자, 잘못된 이메일, 작은 숫자, 큰 숫자, 중복, 순서가 맞지 않음)
// I(Inverse relationship) - 역관계를 적용해서 결과값을 확인(일관성 유지 5 + 5 = 10 이라면  10 - 5 = 5 이여야 한다)
// C(Cross-check) - 다른 수단을 이용해서 결과값이 맞는지 확인(A알고리즘 == B알고리즘, 우리의 알고리즘과 다른 라이브러리의 알고리즘의 결과값이 똑같아야 한다)
// E(Error conditions) - 불행한 경로에 대해 우아하게 처리 하는가?(네트워크 에러, 메모리 부족, 데이터베이스 중지 등)
// P(Performance characteristics) - 성능 확인은 테스트를 통해 정확한 수치로 확인(성능 개선의 척도와 확인도 데이터를 통해 확인)

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 좋은 테스트의 커버리지
// ex) 계산기를 test 할때 나눗셈 test에서 0 / 0,  1 / 0 를 작성한 것 처럼 각 상황, 조건에 맞게 test를 작성
// CORRECT
// C(Conformance) - 특정한 포맷을 준수(전화번호, 이메일, 아이디, 파일 확장자 등)
// O(Ordering) - 순서 조건 확인하기(순서가 중요한 경우)
// R(Range) - 숫자의 범위(제한된 범위보다 작거나 큰 경우)
// R(Reference) - 외부 의존성 유무, 특정한 조건의 유무(~일 때, ~가 되어 있을 때, 어떤 특정한 상황/상태일 때 이런동작을 한다)
// E(Existence) - 값이 존재 하지 않을 때 어떻게 동작하는지(null, undefined, "", 0)
// C(Cardinality) - 0-1-N 법칙에 따라 검증(하나도 없을 때, 하나만 있을 때, 여러개가 있을 때)
// T(Time) - 상대, 절대, 동시의 일들(순서가 맞지 않는 경우, 소비한 시간, 지역 시간)
