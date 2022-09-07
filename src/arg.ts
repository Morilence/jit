type LogCommandArg =
    | "--follow"
    | "--no-decorate"
    | "--decorate"
    | "--decorate=short"
    | "--decorate=full"
    | "--decorate=auto"
    | "--decorate=no"
    | "--decorate-refs=<pattern>"
    | "--decorate-refs-exclude=<pattern>"
    | "--source"
    | "--mailmap"
    | "--no-mailmap"
    | "--use-mailmap"
    | "--no-use-mailmap"
    | "--full-diff"
    | "--log-size"
    | "-L<start>,<end>:<file>"
    | "-L:<funcname>:<file>"
    | "-L:<funcname>:<file>"
    | "--"
    /* Commit Limiting */
    | "-<number>"
    | "-n <number>"
    | "--max-count=<number>"
    | "--skip=<number>"
    | "--since=<date>"
    | "--after=<date>"
    | "--since-as-filter=<date>"
    | "--until=<date>"
    | "--before=<date>"
    | "--author=<pattern>"
    | "--committer=<pattern>"
    | "--grep-reflog=<pattern>"
    | "--grep=<pattern>"
    | "--all-match"
    | "--invert-grep"
    | "-i"
    | "--regexp-ignore-case"
    | "--basic-regexp"
    | "-E"
    | "--extended-regexp"
    | "-F"
    | "--fixed-strings"
    | "-P"
    | "--perl-regexp"
    | "--remove-empty"
    | "--merges"
    | "--no-merges"
    | "--min-parents=<number>"
    | "--max-parents=<number>"
    | "--no-min-parents"
    | "--no-max-parents"
    | "--first-parent"
    | "--exclude-first-parent-only"
    | "--not"
    | "--all"
    | "--branches"
    | "--branches=<pattern>"
    | "--tags"
    | "--tags=<pattern>"
    | "--remotes"
    | "--remotes=<pattern>"
    | "--glob=<glob-pattern>"
    | "--exclude=<glob-pattern>"
    | "--reflog"
    | "--alternate-refs"
    | "--single-worktree"
    | "--ignore-missing"
    | "--bisect"
    | "--stdin"
    | "--cherry-mark"
    | "--cherry-pick"
    | "--left-only"
    | "--right-only"
    | "--cherry"
    | "-g"
    | "--walk-reflogs"
    | "--merge"
    | "--boundary";

type branchCommandArg =
    | "-d"
    | "--delete"
    | "-D"
    | "--create-reflog"
    | "-f"
    | "--force"
    | "-m"
    | "--move"
    | "-M"
    | "-c"
    | "--copy"
    | "-C"
    | "--color"
    | "--color=<when>"
    | "--no-color"
    | "-i"
    | "--ignore-case"
    | "--column"
    | "--column=<options>"
    | "--no-column"
    | "-r"
    | "--remotes"
    | "-a"
    | "--all"
    | "-l"
    | "--list"
    | "--show-current"
    | "-v"
    | "-vv"
    | "--verbose"
    | "-q"
    | "--quiet"
    | "--abbrev=<n>"
    | "--no-abbrev"
    | "-t"
    | "--track"
    | "--track=direct"
    | "--track=inherit"
    | "--no-track"
    | "--recurse-submodules"
    | "--set-upstream"
    | "-u"
    | "--set-upstream-to=<upstream>"
    | "--unset-upstream"
    | "--edit-description"
    | "--contains"
    | "--no-contains"
    | "--merged"
    | "--no-merged"
    | "--sort=<key>"
    | "--points-at"
    | "--format";

export type GitCommandArg = LogCommandArg | branchCommandArg;
