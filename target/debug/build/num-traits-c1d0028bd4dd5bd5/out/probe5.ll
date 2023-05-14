; ModuleID = 'probe5.54f183a8183bf81a-cgu.0'
source_filename = "probe5.54f183a8183bf81a-cgu.0"
target datalayout = "e-m:e-p270:32:32-p271:32:32-p272:64:64-i64:64-f80:128-n8:16:32:64-S128"
target triple = "x86_64-unknown-linux-gnu"

@alloc_f841f3fa9a9d002b5298ce49acbc9011 = private unnamed_addr constant <{ [75 x i8] }> <{ [75 x i8] c"/rustc/cba14074bb4cc12bfe918eabd0d52a3999b2a461/library/core/src/num/mod.rs" }>, align 1
@alloc_7f85a7605f28d6db315122fb7ceaf6b6 = private unnamed_addr constant <{ ptr, [16 x i8] }> <{ ptr @alloc_f841f3fa9a9d002b5298ce49acbc9011, [16 x i8] c"K\00\00\00\00\00\00\00I\04\00\00\05\00\00\00" }>, align 8
@str.0 = internal constant [25 x i8] c"attempt to divide by zero"

; probe5::probe
; Function Attrs: nonlazybind uwtable
define void @_ZN6probe55probe17ha85c5a1f0738ebf4E() unnamed_addr #0 {
start:
  %0 = call i1 @llvm.expect.i1(i1 false, i1 false)
  br i1 %0, label %panic.i, label %"_ZN4core3num21_$LT$impl$u20$u32$GT$10div_euclid17h5d0cd476185891c8E.exit"

panic.i:                                          ; preds = %start
; call core::panicking::panic
  call void @_ZN4core9panicking5panic17h707144c2a14b9368E(ptr align 1 @str.0, i64 25, ptr align 8 @alloc_7f85a7605f28d6db315122fb7ceaf6b6) #3
  unreachable

"_ZN4core3num21_$LT$impl$u20$u32$GT$10div_euclid17h5d0cd476185891c8E.exit": ; preds = %start
  ret void
}

; Function Attrs: nocallback nofree nosync nounwind willreturn memory(none)
declare i1 @llvm.expect.i1(i1, i1) #1

; core::panicking::panic
; Function Attrs: cold noinline noreturn nonlazybind uwtable
declare void @_ZN4core9panicking5panic17h707144c2a14b9368E(ptr align 1, i64, ptr align 8) unnamed_addr #2

attributes #0 = { nonlazybind uwtable "probe-stack"="inline-asm" "target-cpu"="x86-64" }
attributes #1 = { nocallback nofree nosync nounwind willreturn memory(none) }
attributes #2 = { cold noinline noreturn nonlazybind uwtable "probe-stack"="inline-asm" "target-cpu"="x86-64" }
attributes #3 = { noreturn }

!llvm.module.flags = !{!0, !1}

!0 = !{i32 8, !"PIC Level", i32 2}
!1 = !{i32 2, !"RtLibUseGOT", i32 1}
