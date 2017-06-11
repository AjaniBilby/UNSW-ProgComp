HAI
OBTW
  DIS PROGRAM CALCULATEZ SQUARE ROOTZ
TLDR

I HAS A numbr
I HAS A sqrt_numbr
I HAS A power
I HAS A square
I HAS A error

VISIBLE "WUT ROOT DO U WANTS? "
GIMMEH numbr

sqrt_numbr IZ TEH sqrrrrt OF numbr
VISIBLE "sqrt("
VISIBLE numbr
VISIBLE ") = "
VISIBLE sqrt_numbr
VISIBLE "\n"

power IZ TEH two , BTW checking func with no args
IZ NOT BOTH SAEM power AN 2 ?
  YA RLY
    VISIBLE "Arity 0 test FAILed\n"
OIC

error R SUM OF (: DIFF OF 3 AN 1 :) AN FLIP (: QUOSHUNT OF (: PRODUKT OF 2 AN FLIP FLIP 2 :) AN 2 :)
IZ NOT BOTH SAEM error AN 0 ?
  YA RLY
    VISIBLE "Arithmetic operation test FAILed\n"
OIC

IZ EITHER OF (: NOT SAEM OR SMALLR 2 AN 2 :) AN (: NOT BOTH SAEM (: SUM OF 2 AN FLIP 2 :) AN 0 :) ?
  YA RLY
    VISIBLE "Boolean test FAILed\n"
OIC

square R PRODUKT OF sqrt_numbr AN sqrt_numbr
error IZ TEH error_diff OF square AN OF numbr
VISIBLE "Error after squaring result: "
VISIBLE error
VISIBLE "\n"

BTW Newton-Raphson
HOW U MAEK sqrrrrt OF YR root
  I HAS A guess ITZ 1
  I HAS A newguess
  I HAS A absdiff

  IM IN YR loop
    BTW SPLIT EXPRESHUN 2 REDUCE COMPLEXITY
    newguess R SUM OF guess AN (: QUOSHUNT OF root AN guess :)
    newguess R PRODUKT OF newguess AN 0.5

    absdiff IZ TEH absvalue OF DIFF OF newguess AN guess
    guess R newguess
    IZ SMALLR absdiff AN 1e-12 ?
      YA RLY
        GTFO
    OIC
  IM OUTTA YR loop

  FOUND YR guess
IF U SAY SO

BTW Absolute value (magnachood)
HOW U MAEK absvalue OF YR val
  IZ SMALLR val AN 0 ?
    YA RLY
      FOUND YR FLIP val
    NO WAI
      FOUND YR val
  OIC
IF U SAY SO

BTW two more functions to test arg number
HOW U MAEK two
  FOUND YR 2
IF U SAY SO

HOW U MAEK error_diff OF YR answer AN YR other_answer
  I HAS A diff

  diff IZ TEH absvalue OF DIFF OF answer AN other_answer
  FOUND YR diff
IF U SAY SO

KTHXBYE
