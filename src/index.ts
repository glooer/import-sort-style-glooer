import {IStyleAPI, IStyleItem} from "import-sort-style";

export default function(styleApi: IStyleAPI): IStyleItem[] {
  const {
    and,
    hasDefaultMember,
    hasNamedMembers,
    hasNamespaceMember,
    hasNoMember,
    hasOnlyDefaultMember,
    hasOnlyNamedMembers,
    hasOnlyNamespaceMember,
    isAbsoluteModule,
    isRelativeModule,
    member,
    name,
    not,
    startsWithAlphanumeric,
    startsWithLowerCase,
    startsWithUpperCase,
    unicode,
  } = styleApi;

  return [
    // import "foo"
    {match: and(hasNoMember, isAbsoluteModule)},
    {separator: true},
    {separator: true},
  ];
}
