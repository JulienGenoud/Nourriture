package cn.bjtu.nourriture.pages;

import android.graphics.Color;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.view.WindowManager;

import cn.bjtu.nourriture.R;
import cn.bjtu.nourriture.model.Recipes;

/**
 * Created by storm on 12/20/15.
 */
public class RecipePageActivity extends AppCompatActivity {

    private static final String TAG = "RecipePageActivity";
    public static final String NAME = "RECIPES";
    private static String mTitle = null;
    Toolbar toolbar = null;

    @Override
    protected void onCreate(Bundle bundle){
        super.onCreate(bundle);
        setContentView(R.layout.recipe_layout);
        hideactionbar();

        Recipes recipe = getIntent().getExtras().getParcelable(RecipePageActivity.NAME);

        toolbar = (Toolbar) findViewById(R.id.recipe_page_toolbar);
        toolbar.setTitleTextColor(Color.WHITE);
        setSupportActionBar(toolbar);
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        getSupportActionBar().setDisplayShowHomeEnabled(true);

        toolbar.setNavigationOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });
        getSupportActionBar().setTitle(recipe.getName());

//        if (recipe.getDescription() != null) {
//            ((TextView) findViewById(R.id.description)).setText(recipe.getDescription());
//        }
    }

    private void hideactionbar() {
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN);
    }
}
