export type GitArg =
    | "-v"
    | "--version"
    | "-h"
    | "--help"
    | "-C <path>"
    | "-c <name>=<value>"
    | "--config-env=<name>=<envvar>"
    | "--exec-path"
    | "--exec-path=<path>"
    | "--html-path"
    | "--man-path"
    | "--info-path"
    | "-p"
    | "--paginate"
    | "-P"
    | "--no-pager"
    | "--git-dir=<path>"
    | "--work-tree=<path>"
    | "--namespace=<path>"
    | "--super-prefix=<path>"
    | "--bare"
    | "--no-replace-objects"
    | "--literal-pathspecs"
    | "--glob-pathspecs"
    | "--noglob-pathspecs"
    | "--icase-pathspecs"
    | "--no-optional-locks";

export type LogCommandArg =
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
    | "<revision-range>"
    | "--"
    | "<path>"
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
    | "--boundary"
    /* Commit Ordering */
    | "--date-order"
    | "--author-date-order"
    | "--topo-order"
    | "--reverse"
    /* Commit Formatting */
    | "--pretty"
    | "--pretty=oneline"
    | "--pretty=short"
    | "--pretty=medium"
    | "--pretty=full"
    | "--pretty=fuller"
    | "--pretty=reference"
    | "--pretty=email"
    | "--pretty=raw"
    | "--pretty=format:<string>"
    | "--pretty=tformat:<string>"
    | "--format=<format>"
    | "--format=oneline"
    | "--format=short"
    | "--format=medium"
    | "--format=full"
    | "--format=fuller"
    | "--format=reference"
    | "--format=email"
    | "--format=raw"
    | "--format=format:<string>"
    | "--format=tformat:<string>"
    | "--abbrev-commit"
    | "--no-abbrev-commit"
    | "--oneline"
    | "--encoding=<encoding>"
    | "--expand-tabs=<n>"
    | "--expand-tabs"
    | "--no-expand-tabs"
    | "--notes"
    | "--notes=<ref>"
    | "--no-notes"
    | "--show-notes"
    | "--show-notes=<ref>"
    | "--standard-notes"
    | "--no-standard-notes"
    | "--show-signature"
    | "--relative-date"
    | "--date=<format>"
    | "--parents"
    | "--children"
    | "--left-right"
    | "--graph"
    | "--show-linear-break"
    | "--show-linear-break=<barrier>"
    /* Object Traversal */
    | "--no-walk"
    | "--no-walk=sorted"
    | "--no-walk=unsorted"
    | "--do-walk"
    /* Diff Formatting */
    | "-p"
    | "-u"
    | "--patch"
    | "-s"
    | "--no-patch"
    | "--diff-merges=off"
    | "--diff-merges=none"
    | "--diff-merges=on"
    | "--diff-merges=first-parent"
    | "--diff-merges=1"
    | "--diff-merges=separate"
    | "--diff-merges=m"
    | "--diff-merges=combined"
    | "--diff-merges=c"
    | "--diff-merges=dense-combined"
    | "--diff-merges=cc"
    | "--diff-merges=remerge"
    | "--diff-merges=r"
    | "--no-diff-merges"
    | "--combined-all-paths"
    | "-U<n>"
    | "--unified=<n>"
    | "--output=<file>"
    | "--output-indicator-new=<char>"
    | "--output-indicator-old=<char>"
    | "--output-indicator-context=<char>"
    | "--raw"
    | "--patch-with-raw"
    | "-t"
    | "--indent-heuristic"
    | "--no-indent-heuristic"
    | "--minimal"
    | "--patience"
    | "--histogram"
    | "--anchored=<text>"
    | "--diff-algorithm=patience"
    | "--diff-algorithm=minimal"
    | "--diff-algorithm=histogram"
    | "--diff-algorithm=myers"
    | "--stat"
    | "--stat=<width>"
    | "--stat=<width>,<name-width>"
    | "--stat=<width>,<name-width>,<count>"
    | "--compact-summary"
    | "--numstat"
    | "--shortstat"
    | "-X"
    | "-X<params>"
    | "--dirstat"
    | "--dirstat=<params>"
    | "--cumulative"
    | "--dirstat-by-file=<params>"
    | "--summary"
    | "--patch-with-stat"
    | "-z"
    | "--name-only"
    | "--name-status"
    | "--submodule"
    | "--submodule=<format>"
    | "--color"
    | "--color=<when>"
    | "--no-color"
    | "--color-moved"
    | "--color-moved=no"
    | "--color-moved=default"
    | "--color-moved=plain"
    | "--color-moved=blocks"
    | "--color-moved=zebra"
    | "--color-moved=dimmed-zebra"
    | "--no-color-moved"
    | "--color-moved-ws=no"
    | "--color-moved-ws=ignore-space-at-eol"
    | "--color-moved-ws=ignore-space-change"
    | "--color-moved-ws=ignore-all-space"
    | "--color-moved-ws=allow-indentation-change"
    | "--no-color-moved-ws"
    | "--word-diff"
    | "--word-diff=color"
    | "--word-diff=plain"
    | "--word-diff=porcelain"
    | "--word-diff=none"
    | "--word-diff-regex=<regex>"
    | "--color-words"
    | "--color-words=<regex>"
    | "--no-renames"
    | "--rename-empty"
    | "--no-rename-empty"
    | "--check"
    | "--ws-error-highlight=<kind>"
    | "--full-index"
    | "--binary"
    | "--abbrev"
    | "--abbrev=<n>"
    | "-B"
    | "-B<n>"
    | "-B<n>/<m>"
    | "-B/<m>"
    | "-break-rewrites"
    | "-break-rewrites=<n>"
    | "-break-rewrites=<n>/<m>"
    | "-break-rewrites=/<m>"
    | "-M"
    | "-M<n>"
    | "--find-renames"
    | "--find-renames=<n>"
    | "-C"
    | "-C<n>"
    | "--find-copies"
    | "--find-copies=<n>"
    | "--find-copies-harder"
    | "-D"
    | "--irreversible-delete"
    | "-l<num>"
    | "--diff-filter=<filters>"
    | "-S<string>"
    | "-G<regex>"
    | "--find-object=<object-id>"
    | "--pickaxe-all"
    | "--pickaxe-regex"
    | "-O<orderfile>"
    | "--skip-to=<file>"
    | "--rotate-to=<file>"
    | "-R"
    | "--relative"
    | "--relative=<path>"
    | "--no-relative"
    | "-a"
    | "-text"
    | "--ignore-cr-at-eol"
    | "--ignore-space-at-eol"
    | "-b"
    | "--ignore-space-change"
    | "-w"
    | "--ignore-all-space"
    | "--ignore-blank-lines"
    | "-I<regex>"
    | "--ignore-matching-lines=<regex>"
    | "--inter-hunk-context=<lines>"
    | "-W"
    | "--function-context"
    | "--ext-diff"
    | "--no-ext-diff"
    | "--textconv"
    | "--no-textconv"
    | "--ignore-submodules"
    | "--ignore-submodules=<when>"
    | "--src-prefix=<prefix>"
    | "--dst-prefix=<prefix>"
    | "--no-prefix"
    | "--line-prefix=<prefix>"
    | "--ita-invisible-in-index";

export type ConfigCommandArg =
    | "--replace-all"
    | "--add"
    | "--get"
    | "--get-all"
    | "--get-regexp"
    | "--get-urlmatch <name> <URL>"
    | "--global"
    | "--system"
    | "--local"
    | "--worktree"
    | "-f <config-file>"
    | "--file <config-file>"
    | "--blob <blob>"
    | "--remove-section"
    | "--rename-section"
    | "--unset"
    | "--unset-all"
    | "-l"
    | "--list"
    | "--fixed-value"
    | "--type <type>"
    | "--bool"
    | "--int"
    | "--bool-or-int"
    | "--path"
    | "--expiry-date"
    | "--no-type"
    | "-z"
    | "--null"
    | "--name-only"
    | "--show-origin"
    | "--show-scope"
    | "--get-colorbool <name>"
    | "--get-colorbool <name> <stdout-is-tty>"
    | "--get-color <name>"
    | "--get-color <name> <default>"
    | "-e"
    | "--edit"
    | "--includes"
    | "--no-includes"
    | "--default <value>"
    | "<name>"
    | "<value>";

export type BranchCommandArg =
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
    | "-u <upstream>"
    | "--set-upstream-to=<upstream>"
    | "--unset-upstream"
    | "--edit-description"
    | "--contains"
    | "--contains <commit>"
    | "--no-contains"
    | "--no-contains <commit>"
    | "--merged"
    | "--merged <commit>"
    | "--no-merged"
    | "--no-merged <commit>"
    | "--sort=<key>"
    | "--points-at <object>"
    | "--format <format>"
    | "<branchname>"
    | "<start-point>"
    | "<oldbranch>"
    | "<newbranch>";

export type GitCommandArg = "HEAD" | LogCommandArg | ConfigCommandArg | BranchCommandArg;