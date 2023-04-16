package com.react_native_storybook_starter;

import android.content.Context;

import com.facebook.react.BuildConfig;
import com.facebook.react.devsupport.interfaces.DevOptionHandler;
import com.facebook.react.devsupport.interfaces.DevSupportManager;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class StorybookDevMenuOptionHandler implements DevOptionHandler {

    private final Context mContext;

    public static void initDevMenuItem(Context context, DevSupportManager devSupportManager) {
        devSupportManager.addCustomDevOption(
                "Toggle Storybook",
                new StorybookDevMenuOptionHandler(context)
        );
    }

    public StorybookDevMenuOptionHandler(Context context) {
        mContext = context;
    }

    @Override
    public void onOptionSelected() {
        StorybookDevMenuPreferencesService.toggleStorybookFlag(mContext);
        if (BuildConfig.DEBUG) {
            try {
                // ProcessPhoenix.triggerRebirth(mContext);
                // calling it using reflection, to include the package only to debug build
                Class<?> processPhoenixClass = Class.forName("com.jakewharton.processphoenix.ProcessPhoenix");
                Method method = processPhoenixClass.getMethod("triggerRebirth", Context.class);
                method.invoke(null, mContext);
            } catch (ClassNotFoundException | InvocationTargetException | NoSuchMethodException | IllegalAccessException e) {
                e.printStackTrace();
            }
        }
    }

}
