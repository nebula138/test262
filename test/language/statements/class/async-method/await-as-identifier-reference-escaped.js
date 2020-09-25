// This file was procedurally generated from the following sources:
// - src/async-functions/await-as-identifier-reference-escaped.case
// - src/async-functions/syntax/async-class-decl-method.template
/*---
description: await is a reserved keyword within generator function bodies and may not be used as an identifier reference. (Async method as a ClassDeclaration element)
esid: prod-AsyncMethod
features: [async-functions]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    ClassElement :
      MethodDefinition

    MethodDefinition :
      AsyncMethod

    Async Function Definitions

    AsyncMethod :
      async [no LineTerminator here] PropertyName ( UniqueFormalParameters ) { AsyncFunctionBody }


    IdentifierReference : Identifier

    It is a Syntax Error if this production has a [Await] parameter and
    StringValue of Identifier is "await".

---*/
$DONOTEVALUATE();


class C {
  async method() {
    void \u0061wait;
  }
}
// Stores a reference `asyncFn` for case evaluation
let c = new C();
let asyncFn = c.method.bind(c);
