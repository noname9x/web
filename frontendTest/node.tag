<node>
  <div each={ child in opts.tree.children }>
    <node tree={child}/>
  </div>
  <div each={ opts.tree.children ? [] : [1]}>abcdefghij</div>
</node>