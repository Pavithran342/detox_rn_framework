if(NOT TARGET hermes-engine::hermesvm)
add_library(hermes-engine::hermesvm SHARED IMPORTED)
set_target_properties(hermes-engine::hermesvm PROPERTIES
    IMPORTED_LOCATION "C:/Users/pavit/.gradle/caches/8.13/transforms/22a191152b7c38d88758d0abff24d72b/transformed/jetified-hermes-android-250829098.0.14-debug/prefab/modules/hermesvm/libs/android.arm64-v8a/libhermesvm.so"
    INTERFACE_INCLUDE_DIRECTORIES "C:/Users/pavit/.gradle/caches/8.13/transforms/22a191152b7c38d88758d0abff24d72b/transformed/jetified-hermes-android-250829098.0.14-debug/prefab/modules/hermesvm/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

